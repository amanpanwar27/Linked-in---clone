import React from "react";
import { connect } from "react-redux";
import { getuserauth } from "./actions/index.js";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Home from "./Components/Home";
function App({ getuserauth },props) {
  useEffect(() => {
    getuserauth();
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
const Mapstatetoprops = (state) => {
  return {};
};
// sends dispatched data to props
const Mapdispatchtoprops = (dispatch) => {
  console.log(dispatch);
  return {
    getuserauth: () => dispatch(getuserauth()),
  };
};
const newcomponent = connect(Mapstatetoprops, Mapdispatchtoprops)(App);
export default newcomponent;
