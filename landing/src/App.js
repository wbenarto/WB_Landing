import "./App.css";
import { useState } from "react";
import jwtDecode from "jwt-decode";
import Home from "./pages";
import Navbar from "./components/Navbar/index";
import Sidebar from "./components/Sidebar/index";
import SignupPage from "./pages/signup";
import ProfilePage from "./pages/profile";
import HomeMakase from "./pages/homemakase";
import SigninPage from "./pages/signin";
import AuthRoute from "./util/AuthRoute";
import axios from "axios";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED, SET_UNAUTHENTICATED } from "./redux/types";
import { logOutUser, getUserData } from "./redux/actions/userActions";

import SustainabilityPage from "./pages/sustainability";
import NotFoundPage from "./pages/404";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

axios.defaults.baseURL =
  "https://us-central1-webesushi-a3bf0.cloudfunctions.net/api";
const token = localStorage.FBIToken;
if (token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logOutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

function App() {
  return (
    <Provider store={store}>
      <>
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <AuthRoute path="/signin/" component={SigninPage} exact />
            <AuthRoute path="/signup/" component={SignupPage} exact />
            <Route path="/homemakase/" component={HomeMakase} exact />
            <Route
              path="/sustainability/"
              component={SustainabilityPage}
              exact
            />
            <Route path="/profile/" component={ProfilePage} exact />
            {/* <Route component={NotFoundPage} /> */}
            <Redirect to="/homemakase" />
          </Switch>
        </Router>
      </>
    </Provider>
  );
}

export default App;
