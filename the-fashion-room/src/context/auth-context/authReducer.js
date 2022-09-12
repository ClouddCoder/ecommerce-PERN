import { authActions } from "../../actions/authActions";

const loggedJSON = window.localStorage.getItem("logged");
const user = JSON.parse(loggedJSON);

export const authInitialState = {
  auth: user?.userAuth || true,
  userId: user?.userId || "",
  user: user?.userName || "", // nombre del usuario que se muestra en el navbar
  userName: "",
  userLastname: "",
  userEmail: "",
  userPassword: "",
  token: user?.token || "",
};

export function authReducer(state, action) {
  switch (action.type) {
    case authActions.SET_AUTH:
      return { ...state, auth: action.payload };
    case authActions.SET_USER_ID:
      return { ...state, userId: action.payload };
    case authActions.SET_USER:
      return { ...state, user: action.payload };
    case authActions.SET_USERNAME:
      return { ...state, userName: action.payload };
    case authActions.SET_LASTNAME:
      return { ...state, userLastname: action.payload };
    case authActions.SET_EMAIL:
      return { ...state, userEmail: action.payload };
    case authActions.SET_PASSWORD:
      return { ...state, userPassword: action.payload };
    case authActions.SET_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
}
