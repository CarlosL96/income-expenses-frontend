import { logInFetch } from "../Fetch";

export async function loginUser(dispatch, loginPayload) {
    try {
      dispatch({ type: "REQUEST_LOGIN" });
      let data = await logInFetch(loginPayload);
      if (data.success) {
        localStorage.setItem("currentUser", JSON.stringify(data));
        dispatch({ type: "LOGIN_SUCCESS", payload: data });
        return data;
      }
      dispatch({ type: "LOGIN_ERROR", error: data.info });
      return data;
    } catch (error) {
      dispatch({ type: "LOGIN_ERROR", error: error });
    }
  }
  
  export async function logout(dispatch) {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
  }
  