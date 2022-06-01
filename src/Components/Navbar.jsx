import React, { useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import pLogo from "../project-logo.png";
import routes from "../Config/routes";
import PropTypes from "prop-types";

const navbarRoutes = routes.filter((route) => route.isPrivate);

const TopBar = styled.div`
  background-color: #e0dae9;
  z-index: 999;
  height: 50px;
  position: fixed;
  top: 0;
  .bar {
    background-color: #200a42;
    width: 99vw;
    height: 40px;
    color: white;
    margin: 5px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .topbar-body {
    .bars {
      font-size: 20pt;
      margin: 0 10px;
      cursor: pointer;
    }
    img {
      height: 30px;
      width: 30px;
      margin: 0 10px;
    }
    span {
      position: fixed;
      top: 15px;
    }
  }

  .user-info {
    position: fixed;
    right: 30px;
  }
  @media screen and (min-width: 0px) and (max-width: 480px) {
    .project-title {
      display: none;
    }
  }
`;

const Top = (props) => {
  return (
    <TopBar>
      <div className="bar">
        <div className="topbar-body">
          <FaBars className="bars" onClick={() => props.onCollapse()} />
          <img src={pLogo} alt="" />
          <span className="project-title">Registro de Gastos e Ingresos</span>
        </div>
        <div className="user-info">
          <span>Bienvenido, username</span>
        </div>
      </div>
    </TopBar>
  );
};

const SideBar = styled.div`
  margin: 4% 5px 0;
  transition: 0.5s;
  float: left;
  nav {
    background-color: #200a42;
    border-radius: 10px;
    transition: 0.5s;
    height: 87vh;
    color: white;
    position: fixed;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    list-style: none;
    padding: 0 10px;
  }
  li {
    border-radius: 10px;
    margin: 20px 0;
    font-size: 1.3em;
    padding: 10px 5px;
  }
  a {
    text-decoration: none;
    white-space: nowrap;
    color: white;
  }
  span {
    margin-left: 5px;
  }
  .li-active {
    background-color: #5271ff;
  }
  li:hover {
    background-color: #e0dae9;
    transition: 0.5s ease-out;
    a {
      color: #200a42;
      transition: 1s;
    }
  }
  .mobile-modal,
  .mobile-modal-active {
    display: none;
  }
  /*Tablet*/
  @media screen and (min-width: 480px) and (max-width: 1200px) {
    margin: 5% 5px 0;
    ul {
      margin-top: 160px;
    }
  }
  /*Tablet Vertical*/
  @media screen and (min-width: 480px) and (max-width: 1100px) and (min-height: 1000px) {
    margin: 10% 5px 0;
    ul {
      margin-top: 160px;
    }
  }

  /*Mobile*/
  @media screen and (min-width: 0px) and (max-width: 480px) {
    margin: 15% 5px 0;
    ul {
      margin-top: 150px;
    }
    .mobile-modal-active {
      display: inline-block;
      background-color: black;
      opacity: 0.5;
      width: 100vw;
      height: 100%;
      position: absolute;
      top: 0;
      z-index: -1;
    }
  }

  /*Mobile Landscape*/
  @media screen and (min-width: 0px) and (max-width: 920px) and (max-height: 450px) {
    min-height: 100%;
    margin-top: 35px;
    ul {
      margin-top: 50px;
    }
    li {
      margin: 10px 0;
    }
  }
`;

const Side = (props) => {
  const { uncollapse, activeUrl } = props;

  return (
    <SideBar style={{ width: uncollapse ? "50px" : "150px" }}>
      <nav>
        <ul>
          {navbarRoutes.map((route, index) => {
            const Icon = route.icon;
            return (
              <li key={index} className={activeUrl == route.path ? "li-active" : ""}>
                <a href={route.path}>
                  <Icon />
                  <span style={{ display: uncollapse ? "none" : "inline" }}>
                    {route.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div
        className={uncollapse ? "mobile-modal" : "mobile-modal-active"}
      ></div>
    </SideBar>
  );
};

const Navbar = () => {
  const [uncollapse, setUncollapse] = useState(true);
  const activeUrl = window.location.pathname;
  const toggleCollapse = () => {
    setUncollapse(!uncollapse);
  };
  return (
    <div>
      <Top onCollapse={toggleCollapse} />
      <Side uncollapse={uncollapse} activeUrl={activeUrl} />
    </div>
  );
};

export default Navbar;
