import React from "react";
import Selector from "./Selector";
import styled from "styled-components";

const products = [
  { label: "Electrónica" },
  { label: "Hola Mundo los saluda" },
  { label: "Electrónica" },
  { label: "Hola Mundo" },
  { label: "Electrónica" },
  { label: "Hola Mundo" },
  { label: "Electrónica" },
  { label: "Hola Mundo" },
  { label: "Electrónica" },
  { label: "Hola Mundo" },
  { label: "Electrónica" },
  { label: "Hola Mundo" },
  { label: "Electrónica" },
  { label: "Hola Mundo" },
  { label: "Electrónica" },
  { label: "Hola Mundo" },
  { label: "Electrónica" },
];

const Container = styled.div`
  background-color: white;
  height: 100%;
  max-height: 100%;
  width: 100%;
  max-width: 100%;
  .title {
    margin: 0;
    padding: 0;
    h4 {
      margin: 0;
      padding: 5px;
    }
  }
  .category-selector {
    height: 15%;
    max-height:15%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .product-data {
    height: 70%;
    max-height: 70%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top:1%;
    
  }
`;

const ProductPanel = () => {
  return (
    <Container>
      <div className="title">
        <h4>Panel de productos</h4>
      </div>
      <div className="category-selector">
        <Selector />
      </div>
      <div className="product-data">
        <ProductData>
          <div className="data-panel">
            {products.map((item, i) => {
              return (
                <button key={i} className="product-button">
                  {item.label}
                </button>
              );
            })}
          </div>
        </ProductData>
      </div>
    </Container>
  );
};

const ProductData = styled.div`
  background-color: #e0dae9;
  height: 90%;
  max-height: 90%;
  overflow: hidden;
  overflow-y: auto;
  width: 90%;
  padding: 0;
  padding: 10px;
  margin:0;


  .data-panel {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    button {
      width: auto;
      height: 40px;
      background-color: #398ab8;
      color: white;
      border: none;
      margin: 2px;
      cursor: pointer;
      :hover {
        opacity: 80%;
        transition: 0.5s;
      }
    }
  }
`;

export default ProductPanel;
