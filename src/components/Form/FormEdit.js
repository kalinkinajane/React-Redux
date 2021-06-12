import React, { useEffect } from "react";
import "./Form.scss";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

function FormEdite(props) {
  const [values, setValues] = React.useState({
    name: "",
    type: "",
    where: "",
    date: "",
  });

  const history = useHistory();
  let { index } = useParams();
  const item = props.items.find((_, i) => i.toString() === index);
  useEffect(() => {
    if (item !== undefined) {
      setValues(item);
    }
  }, []);
  function handleClick() {
    history.push("/");
  }

  function handleChange({ target: { name, value } }) {
    setValues({ ...values, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onEditeItem(values, index);
  }

  return (
    <div className="form__content">
      <h1 className="form__title">Редактировать событие</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name-event" className="form__lable">
          <span className="form__lable-text">Название события</span>
          <input
            id="name-event"
            type="text"
            name="name"
            className="form__imput"
            value={values.name || ""}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="name-event" className="form__lable">
          <span className="form__lable-text">Тип события</span>
          <select
            className="form__select"
            name="type"
            value={values.type || " "}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="Празднечные дни">Празднечные дни</option>
            <option value="Мероприятия">Мероприятия</option>
            <option value="Пометки/Другое">Пометки/Другое</option>
          </select>
        </label>
        <label htmlFor="where-go" className="form__lable">
          <span className="form__lable-text">Куда идти?</span>
          <input
            id="where-go"
            type="text"
            name="where"
            className="form__imput"
            value={values.where || ""}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="localdate" className="form__lable">
          <span className="form__lable-text">Во сколько?</span>
          <input
            type="datetime-local"
            id="localdate"
            name="date"
            className="form__imput"
            value={values.date || ""}
            onChange={handleChange}
          />
        </label>
        <div className="form__button-container">
          <button className="form__button" onClick={handleClick}>
            Отмена
          </button>
          <button className="form__button" type="submit">
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormEdite;
