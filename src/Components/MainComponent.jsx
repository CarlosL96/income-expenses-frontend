import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { validateTokenFetch } from "../Fetch";
import routes from "../Config/routes";
import { useAuthState, useAuthDispatch, logout } from "../Context";
import RenderPage from "./RenderPage";

const MainComponent = () => {
  const userDetails = useAuthState();
  const navigate = useNavigate();
  const dispatch = useAuthDispatch();
  const handleLogout = () => {
    logout(dispatch); //call the logout action
    navigate("/"); //navigate to logout page on logout
  };
  const validateToken = async () => {
    const tokenStatus = await validateTokenFetch(userDetails.token);
    const validToken = tokenStatus.validToken ? tokenStatus.validToken : false;
    if (!validToken) handleLogout();
  };
  useEffect(async () => {
    await validateToken();
  }, []);
  return (
    <Routes>
      {routes.map((route, index) => {
        let Component = route.component;
        const isPrivate = route.isPrivate;
        const pagePath = route.pagePath;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              isPrivate && !Boolean(userDetails.token) ? (
                <Navigate to="/login" />
              ) : (
                <RenderPage
                  page={Component}
                  isPrivate={isPrivate}
                  pagePath={pagePath}
                />
              )
            }
          />
        );
      })}
    </Routes>
  );
};

MainComponent.propTypes = {};

export default MainComponent;