import React from "react";
import styles from "./login.module.css";
import pLogo from "../project-logo.png";
import Copyright from "../Components/Copyright";

const Login = () => {
  return (
    <div className={styles.container}>
      <form className={styles.loginForm}>
        <div className={styles.formHeader}>
          <img src={pLogo} />
          <h4> Registro de Gastos e Ingresos</h4>
        </div>
        <div className={styles.inputControls}>
          <h1>¡Bienvenido!</h1>
          <h3>Inicie sesión en su cuenta</h3>
          <input type="text" placeholder="Nombre de Usuario" />
          <input type="password" placeholder="Contraseña" />
          <div className={styles.remember}>
            <input type="checkbox" /> Recordarme
          </div>
          <button>Acceder</button>
        </div>
      </form>
      <Copyright/>
    </div>
  );
};


export default Login;
