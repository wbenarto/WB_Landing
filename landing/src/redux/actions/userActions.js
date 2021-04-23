import axios from "axios";
import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types";

export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post(
      "https://us-central1-webesushi-a3bf0.cloudfunctions.net/api/login",
      userData
    )
    .then((res) => {
      console.log(res.data);

      const FBIdToken = `Bearer ${res.data.token}`;
      localStorage.setItem("FBIdToken", FBIdToken);
      axios.defaults.headers.common["Authorization"] = FBIdToken;
      // dispatch(getUserData());
      // dispatch({ type: CLEAR_ERRORS });

      // props.props.history.push("/");
      console.log(history);
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const getUserData = () => (dispatch) => {
  axios
    .get("https://us-central1-webesushi-a3bf0.cloudfunctions.net/api/user")
    .then((res) => {
      console.log(res);
      dispatch({
        type: SET_USER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
