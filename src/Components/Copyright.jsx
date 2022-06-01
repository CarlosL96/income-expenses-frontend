import React from "react";
import styled from "styled-components";
import { FaLinkedinIn } from "react-icons/fa";
import PropTypes from "prop-types";

const Container = styled.div`
  background-color: #200a42;
  width: 100vw;
  height: 3.5%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0px;
  color: white;
  
  .logos {
    margin: 0 20px;
    padding: 0;
    cursor: pointer;
  }
`;

const Copyright = () => {
  return (
    <Container>
      © 2022 Carlos Lugo
      <div className="logos">
        <FaLinkedinIn />
      </div>
    </Container>
  );
};



export default Copyright;
