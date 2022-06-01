import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const Container = styled.div`
  height: 100%;
  min-height: 100%;
  width: 100%;
  min-width: 100%;
  .title {
    margin: 5px;
    padding: 0;
    height: 5%;
    max-height: 5%;
    h4 {
      margin: 0;
      padding: 0;
    }
  }
  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 35% 65%;
    margin: 0;
    padding: 0;
    height: 95%;
    max-height: 95%;
    min-height: 95%;
  }
  .form-inputs {
    grid-column: 1;
    grid-row: span 2;
    background-color: #e0dae9;
    width: 100%;
    max-width: 100%;
    height: 85%;
    max-height: 85%;
    margin: 5px 10px;
    padding: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input {
      border: none;
      margin: 5px 10px;
      height: 20%;
      width: 80%;
    }
  }

  .form-date {
    background-color: red;
    margin: 0;
    margin: 5px 5% 5px 10%;
  }
  .form-date-content {
    background-color: #e0dae9;
    grid-column: 2;
    grid-row: 1;
    padding: 10px;
    height: 100%;

    h4 {
      margin: 0;
      padding: 0;
      span {
        display: inline-block;
        margin: 5px 10px;
        margin-bottom: 5px;
      }
    }
    .react-datepicker-wrapper {
      height: 100%;
    }

    .react-datepicker__input-container {
      display: block;
      position: relative;
      height: 100%;
    }

    .wrapper {
      border: none;
      display: block;
      width: 90%;
      margin: 5px;
      height: 40%;
      input {
        height: 100%;
        width: 100%;
        border: none;
      }
    }
  }

  .form-buttons {
    grid-row: 2;
    grid-column: 2;
    height: 100%;
    max-height: 100%;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    button {
      margin: 5px 0;
      width: 70%;
      height: 30%;
      border: none;
      color: white;
      :hover {
        opacity: 80%;
        transition: 0.5s;
      }
    }
    .button-saveRecord {
      background-color: #ff914d;
    }
    .button-saveAll {
      background-color: #5271ff;
    }
  }
`;

const DataForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Container>
      <div className="title">
        <h4>Datos del registro</h4>
      </div>
      <form>
        <div className="form-inputs">
          <input type={"text"} placeholder="Nombre"></input>
          <input type={"text"} placeholder="Cantidad"></input>
          <input type={"text"} placeholder="Costo"></input>
          <input list="types" placeholder="Tipo"></input>
          <input list="branches" placeholder="Sucursal"></input>
          <datalist id="branches">
            <option>Sucursal 1</option>
            <option>Sucursal 2</option>
          </datalist>
          <datalist id="types">
            <option>Gasto</option>
            <option>Ingreso</option>
          </datalist>
        </div>
        <div className="form-date">
          <div className="form-date-content">
            <h4>
              <span> Fecha</span>
              <FaCalendarAlt />
            </h4>
            <div className="wrapper">
              {" "}
              <DatePicker
                className="date-picker"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
        </div>
        <div className="form-buttons">
          <button className="button-saveRecord">Registrar </button>
          <button type="submit" className="button-saveAll">
            Guardar todos los registros
          </button>
        </div>
      </form>
    </Container>
  );
};

DataForm.propTypes = {};

export default DataForm;
