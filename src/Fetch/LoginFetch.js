import { basePath } from ".";
export const logInFetch = async (userInfo) => {
  const { username, password } = userInfo;
  const opts = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  };
  return await fetch(`${basePath}/user/login`, opts)
    .then((res) => res.json())
    .catch(() => ({ error: true }));
};

export const validateTokenFetch = async (token) => {
  if (!token || token == "") {
    return { validToken: false };
  }
  const opts = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization-Token": token,
    },
  };
  return await fetch(`${basePath}/user/tokenValidate`, opts)
    .then((res) => res.json())
    .catch(() => ({ validToken: false }));
};