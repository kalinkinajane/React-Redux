import "./App.scss";
import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Main from "../Main/Main";
import Form from "../Form/Form";
import FormEdite from "../Form/FormEdit";
import changeTime from "../../utils/utils";

const App = () => {
  const [items, setItems] = React.useState([]);
  const [filterItems, setFilterItems] = React.useState([]);
  const [isDay, isClickDay] = React.useState(false);
  const history = useHistory();
  React.useEffect(() => {
    const findItems = localStorage.getItem("items");
    setItems(JSON.parse(findItems));
  }, []);

  function hendleAddItem(item) {
    setItems([...items, item]);
    localStorage.setItem("items", JSON.stringify([...items, item]));
    history.push("/");
  }

  function handleDeleteItem(toDoindex) {
    const changeItems = items.filter((_, index) => index !== toDoindex);
    setItems(changeItems);
    localStorage.setItem("items", JSON.stringify(changeItems));
  }

  function handleUpdateItem(changeItem, index) {
    const newItem = items.map((item, i) => {
      if (i.toString() === index) {
        item = { ...changeItem };
      }
      return item;
    });
    setItems(newItem);
    localStorage.setItem("items", JSON.stringify(newItem));
    history.push("/");
  }

  function filterItemsDate(day) {
    const newFilterData = items.filter(
      (item) => changeTime(item.date) === changeTime(day)
    );
    isClickDay(true);
    setFilterItems(newFilterData);
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Main
            items={isDay ? filterItems : items}
            handleDeleteItem={handleDeleteItem}
            filterItemsDate={filterItemsDate}
          />
        </Route>
        <Route path="/form">
          <Form onAddItem={hendleAddItem} />
        </Route>
        <Route path="/editeform/:index">
          <FormEdite items={items} onEditeItem={handleUpdateItem} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
