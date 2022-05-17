import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { loginUser, useAuthState, useAuthDispatch } from "../Context";
import styles from "./login.module.css";
import pLogo from "../project-logo.png";
import Copyright from "../Components/Copyright";
import LoadingOverlay from "react-loading-overlay";
import styled from "styled-components";

const fetchingStatus = { ok: 0, loading: 1, error: 2 };
const initialPageState = [{ status: 0, info: "" }];

const Login = () => {
  const [pageState, setPageState] = useState([...initialPageState]);
  const [remeberme, setRememberme] = useState(false);
  const userDetails = useAuthState();
  let navigate = useNavigate();
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState();

  useEffect(() => {
    const pageInitializer = () => {
      const userRemeber = localStorage.getItem("username");
      if (userRemeber) {
        setUser(userRemeber);
        toggleRememberme(true)
      }
    };
    pageInitializer();
  }, []);
  
  if (Boolean(userDetails.token)) {
    return <Navigate to="/general" />;
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setPageState({ status: 1, info: "" });
      let response = await loginUser(dispatch, { username, password });
      setPageState({ status: 0, info: "" });
      if (response.error) {
        console.log(response);
        setPageState({ status: 2, info: "" });
        return;
      }
      if (!response.success) {
        console.log(response);
        return;
      }
      navigate("/general");
    } catch (error) {
      console.log(error);
      setPageState({ status: 2, info: "" });
    }
  };

  const handleUsername = (username) => {
    setUser(username);
    if (!username) localStorage.removeItem("username");
    if (remeberme) localStorage.setItem("username", username);
  };

  const toggleRememberme = (value) => {
    if (value){
      setRememberme(value)
      return;
    }
    setRememberme(!remeberme);   
    if (!remeberme) {
      localStorage.setItem("username", username);
      return;
    }
    localStorage.removeItem("username");
  };

  return (
    <div className="darkBackground">
      <LoadingOverlay active={true} spinner text="Iniciando sesión">
        <div
          className={styles.container}
          style={{
            zIndex: pageState.status == fetchingStatus.loading ? -1 : 1000,
          }}
        >
          <form className={styles.loginForm} onSubmit={(e) => handleLogin(e)}>
            <div className={styles.formHeader}>
              <img src={pLogo} alt={""} />
              <h4> Registro de Gastos e Ingresos</h4>
            </div>
            <div className={styles.inputControls}>
              <h1>¡Bienvenido!</h1>
              <h3>Inicie sesión en su cuenta</h3>
              <input
                type="text"
                placeholder="Nombre de Usuario"
                value={username}
                required={true}
                onChange={(e) => handleUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Contraseña"
                required={true}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className={styles.remember}>
                <input
                  type="checkbox"
                  checked={remeberme}
                  onChange={() => toggleRememberme()}
                />{" "}
                Recordarme
              </div>
              <button type="submit">Acceder</button>
            </div>
          </form>
          <Copyright />
        </div>
      </LoadingOverlay>
      <div
        className={styles.errorPrompt}
        style={errorMessage ? { left: "30%" } : {}}
      >
        <span>{errorMessage}</span>
      </div>
    </div>
  );
};

export default Login;
