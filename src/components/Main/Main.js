import React from "react";
import Calendar from "react-calendar";
import "./main.scss";
import { Link } from "react-router-dom";

const changeTime = (time) => {
  const timeStamp = new Date(Date.parse(time));

  var options = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const date = timeStamp.toLocaleString("ru", options);
  const finishDate = date + ", " + timeStamp.getFullYear();
  return finishDate;
};

function Main({ items, handleDeleteItem, filterItemsDate }) {
  const [value, onChange] = React.useState(new Date());

  const changeDate = (e) => {
    onChange(e);
  };
  function clickDay() {
    filterItemsDate(value);
  }

  return (
    <main className="main">
      <div className="main__calendar">
        <Calendar
          onChange={changeDate}
          value={value}
          className="react-calendar"
          onClickDay={clickDay}
        />
        <Link className="link" to="/form">
          <button className="main__button">Добавить</button>
        </Link>
      </div>
      <div className="main__list">
        {items.map((item, index) => (
          <div className="info" item={item} key={index.toString()}>
            <div className="info__container">
              <Link to={`editeform/${index}`}>
                <button className="info__edit">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 18.2499H1.5C1.30109 18.2499 1.11032 18.1709 0.96967 18.0302C0.829018 17.8896 0.75 17.6988 0.75 17.4999V13.3105C0.75 13.2121 0.769399 13.1145 0.80709 13.0235C0.844781 12.9325 0.900026 12.8499 0.96967 12.7802L12.2197 1.53022C12.3603 1.38956 12.5511 1.31055 12.75 1.31055C12.9489 1.31055 13.1397 1.38956 13.2803 1.53022L17.4697 5.71956C17.6103 5.86021 17.6893 6.05097 17.6893 6.24989C17.6893 6.4488 17.6103 6.63956 17.4697 6.78022L6 18.2499Z"
                      stroke="#555960"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </Link>
              <button
                className="info__del"
                onClick={() => {
                  handleDeleteItem(index);
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0H6V2H0V4H18V2H12V0ZM2 6V17C2 18.1046 2.89543 19 4 19H14C15.1046 19 16 18.1046 16 17V6H14V17H4V6H2ZM6 6L6 15H8L8 6H6ZM10 6V15H12V6H10Z"
                    fill="#555960"
                  />
                </svg>
              </button>
            </div>
            <p className="info__type">{item.type}</p>
            <h1 className="info__title">{item.name}</h1>
            <p className="info__mesto">Место:{item.where}</p>
            <p className="info__time">Дата: {changeTime(item.date)}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
export default Main;
