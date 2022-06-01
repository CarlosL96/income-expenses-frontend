import React from "react";
import styled from "styled-components";
import RecordDetails from "./RecordDetails";
import { formatCurrency } from "../../Functions/Currency";
import PropTypes from "prop-types";
let formatter = Intl.NumberFormat("en", { notation: "compact" });

const Container = styled.div`
  background-color: white;
  margin: 2% 2%;
  margin-bottom: 20px;
  height: 95%;
  width: 95%;
  .title {
    height: 5%;
    h4 {
      margin: 0;
      padding: 5px;
    }
  }

  .cards-container {
    margin: 0px;
    margin-top: 10px;
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    overflow-x: auto;
  }
  .details-container {
    height: 75%;
  }
`;

const DataRecord = () => {
  return (
    <Container>
      <div className="title">
        <h4> Resumen de los registros</h4>
      </div>
      <div className="cards-container">
        <Card title="Gastos" value={"$" + formatter.format(1500000)} />
        <Card title="Ingresos" value={"$" + formatter.format(1521)} />
        <Card title="Cantidad" value={"$" + formatter.format(100000)} />
        <Card title="Balance" value={"$" + formatter.format(100.12)} />
      </div>
      <div className="details-container">
        <RecordDetails />
      </div>
    </Container>
  );
};

const CardContainer = styled.div`
  background-color: #e0dae9;
  margin: 0 1%;
  width: 22%;
  min-width: 22%;
  height: 55%;
  color: gray;
  h4,
  span {
    display: block;
    margin: 0;
    padding: 2%;
    padding-bottom: 5%;
  }
  span,
  h4 {
    margin-top: 3%;
  }
`;

const Card = (props) => {
  return (
    <CardContainer>
      <h4>{props.title}</h4>
      <span>{props.value}</span>
    </CardContainer>
  );
};

export default DataRecord;
