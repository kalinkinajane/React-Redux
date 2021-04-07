/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Info extends Component {
  render() {
    return (
      <div className="info">
        <Link className="link" to="/">
          &larr; Вернуться на главную страницу
        </Link>
        <div className="info__conteiner">
          {this.props.items.map((item) => {
            return (
              <div className="items__cconteiner" key={item.id}>
                <img src={item.avatar} />
                <p>{item.first_name}</p>
                <p>{item.last_name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Info;
