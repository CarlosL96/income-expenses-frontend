import React, { useState } from "react";
import styled from "styled-components";
import Accordion from "./Accordion";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const data = {
  headers: [
    { label: "Tipo", key: "type" },
    { label: "Total", key: "total" },
  ],
  actions: { label: "Eliminar registro", icon: RiDeleteBin6Line },
  subHeaders: [
    { label: "Nombre", key: "label" },
    { label: "Cantidad", key: "qty" },
    { label: "Costo", key: "cost" },
    { label: "Sucursal", key: "branch" },   
  ],
  details: [
    {
      label: "Producto 1acgas",
      type: "Gasto",
      total: 151,
      qty: 1,
      cost: 10,
      branch: "Sucursal 2",
    },
    {
      label: "Producto 1",
      type: "Gasto",
      total: 151,
      qty: 1,
      cost: 10,
      branch: "Sucursal 2",
    },
    {
      label: "Producto 1",
      type: "Gasto",
      total: 151,
      qty: 1,
      cost: 10,
      branch: "Sucursal 2",
    },
    {
      label: "Producto 1",
      type: "Gasto",
      total: 151,
      qty: 1,
      cost: 10,
      branch: "Sucursal 2",
    },
    {
      label: "Producto 1",
      type: "Gasto",
      total: 151,
      qty: 1,
      cost: 10,
      branch: "Sucursal 2",
    },
    {
      label: "Producto 1",
      type: "Gasto",
      total: 151,
      qty: 1,
      cost: 10,
      branch: "Sucursal 2",
    },
    {
      label: "Producto 1",
      type: "Gasto",
      total: 151,
      qty: 1,
      cost: 10,
      branch: "Sucursal 2",
    },
    {
      label: "Producto 1",
      type: "Gasto",
      total: 151,
      qty: 1,
      cost: 10,
      branch: "Sucursal 2",
    },
  ],
};

const Container = styled.div`
  height: 95%;
  width: 100%;
  min-height: 95%;
  min-width: 100%;
  .title {
    display: flex;
    flex-direction: row;
    position: relative;
    span {
      margin: 1%;
      position: absolute;
      right: 6%;
    }
  }
  .accordion {
    height: 92%;
    margin: 0;
    margin-top: 10px;
    min-height: 92%;
    width: 100%;
    max-width: 100%;
  }
`;

const RecordDetails = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <Container>
      <div className="title">
        <h4>Detalles</h4>
        <span>
          {showAll ? "Ocultar todo" : "Mostar todo"}{" "}
          {showAll ? <AiFillMinusCircle /> : <AiFillPlusCircle />}{" "}
        </span>
      </div>
      <div className="accordion">
        <Accordion
          data={data}
          header1={{ label: "Tipo", prop: "type" }}
          header2={{ label: "Total", prop: "total" }}
        />
      </div>
    </Container>
  );
};


export default RecordDetails;
