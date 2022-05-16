import { logInFetch, validateTokenFetch } from "./LoginFetch";
export const basePath =
  process.env.NODE_ENV === "production"
    ? "https://carnitas-don-fede-fe.herokuapp.com/api"
    : "http://localhost:5000/api";
//: "http://localhost:5000/api";

export { logInFetch, validateTokenFetch };
