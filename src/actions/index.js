import { auth, provider } from "../firebase";
import { ADD_USER } from "../actions/Actiontype";

const setuser = (payload) => {
  return {
    type: ADD_USER,
    user: payload,
  };
};
export function SigninApi() {
  const temp = auth
    .signInWithPopup(provider)
    .then((payload) => {
      console.log(payload);
      setuser(payload);
    })
    .catch((err) => {
      console.log(err.message);
    });
  return temp;
}
export function getuserauth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setuser(user));
      }
    });
  };
}
