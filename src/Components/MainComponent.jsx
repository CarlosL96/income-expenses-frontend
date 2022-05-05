import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import routes from "../Config/routes.js";

const MainComponent = () => {
  return (
    <Routes>
      {routes.map((route, index) => {
        let Component = route.component;        
        return <Route key={index} path={route.path} element={Component} />;
      })}
    </Routes>
  );
};

MainComponent.propTypes = {};

export default MainComponent;
