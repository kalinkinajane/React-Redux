import "./App.css";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Info from "./components/Info";
import * as api from "./api/api";
import { connect } from "react-redux";
import { addItem } from "./actions/index";
import { removeItem } from "./actions/index";

class App extends Component {
  state = {};
  hendleRequest = () => {
    const { addItem } = this.props;
    api.getInfo().then((data) => {
      data.data.map((item) => {
        addItem(item);
      });
    });
  };
  removeItem = () => {
    const { removeItem } = this.props;
    removeItem();
  };

  render() {
    const { items } = this.props;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main onChange={this.hendleRequest} onRemove={this.removeItem} />
          </Route>
          <Route path="/info">
            <Info items={items} />
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
});
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: () => dispatch(removeItem()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
