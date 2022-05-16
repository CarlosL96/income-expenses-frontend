

let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).auth_token
  : "";

let user = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).username
  : "";

export const userInitialState = {
  userDetails: "" || user,
  user: "" || user,
  token: "" || token,
  loading: false,
  errorMessage: null,
};

export const AuthReducer = (userInitialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...userInitialState,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...userInitialState,
        user: action.payload.username,
        token: action.payload.auth_token,
        loading: false,
      };
    case "LOGOUT":
      return {
        ...userInitialState,
        user: "",
        token: "",
      };

    case "LOGIN_ERROR":
      return {
        ...userInitialState,
        loading: false,
        errorMessage: action.error,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
