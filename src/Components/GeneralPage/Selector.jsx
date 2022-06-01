import React, { useRef } from "react";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import styled from "styled-components";

const data = [
  { label: "Electrónica" },
  { label: "Doméstico" },
  { label: "Deportes" },
  { label: "Cocina" },
  { label: "Deportes" },
  { label: "Cocina" },
  { label: "Deportes" },
  { label: "Cocina" },
  { label: "Deportes" },
  { label: "Cocina" },
];

const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 80%;
  min-width: 80%;
  font-size: 1em;
  .data-carrousel {
    overflow: hidden;
    overflow-x: auto;
    display: flex;
    flex-direction: row;
    ::-webkit-scrollbar {
      display: none;
    }
    scroll-behavior: smooth;
  }
  span {
    display: block;
    margin: 0 10px;
    padding: 5px 10px;
    white-space: nowrap;
    background-color: #737373;
    color: white;
    cursor: pointer;
    :hover{
        background-color:#525252;
        transition: 0.5s;
    }
  }
  .direction-button {
    cursor: pointer;
    background-color: white;
    min-height: 30px;
    min-width: 30px;
  }
`;

const Selector = () => {
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <Container>
      <AiOutlineCaretLeft className="direction-button" onClick={() => scroll(-60)} />
      <div className="data-carrousel" ref={ref}>
        {data.map((item, i) => {
          return <span key={i}>{item.label}</span>;
        })}
      </div>
      <AiOutlineCaretRight className="direction-button" onClick={() => scroll(60)}/>
    </Container>
  );
};

Selector.propTypes = {};

export default Selector;
