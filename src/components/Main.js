import React, { Component } from "react";
import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Link className="link" to="/info">
          Перейти на страницу с результатами &rarr;
        </Link>

        <button onClick={this.props.onChange}>Отправить запрос</button>
        <button onClick={this.props.onRemove}>Удалить данные</button>
      </div>
    );
  }
}
export default Main;
