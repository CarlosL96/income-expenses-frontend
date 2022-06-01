import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsFillCaretUpSquareFill } from "react-icons/bs";
import PropTypes from "prop-types";

const Container = styled.div`
  height: 100%;
  min-height: 100%;
  width: 98%;
  min-width: 98%;
  max-height: 100%;
  margin: 10px 5px;
  overflow: hidden;
  overflow-y: auto;
  .row-header {
    background-color: #e0dae9;
    width: 100%;
    min-width: 100%;
    display: flex;
    flex-direction: row;
    padding: 8px 0;

    color: #737373;
    span {
      display: inline-block;
      min-width: 22%;
    }
  }
  .row-index {
    margin: 0 5%;
    width: auto;
    min-width: 25px;
    min-height: 25px;
    font-size: 0.8em;
    border-radius: 50%;
    color: white;
    background-color: #398ab8;
    font-weight: normal;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .row-details {
    max-height: 0px;
    overflow: hidden;
  }

  .row-details-show {
    display: grid;
    margin: 5px 0;
    grid-template-rows: 1fr;
    grid-template-columns: 70% 30%;
    height: auto;
    max-height: 70px;
    span {
      display: inline-block;
      white-space: nowrap;
      margin: 2px 0;
      width: auto;
      min-width: 50%;
      max-width: 100%;
    }
  }
  .row-label {
    font-weight: bold;
  }
  .icon {
    margin-left: 5px;
    color: #8c52ff;
    cursor: pointer;
    transition: 0.5s all;
    :hover {
      opacity: 50%;
    }
  }

  .data-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .action-icon {
    background-color: red;
    margin: 5px 0;
    height: 25%;
    width: 25%;
    border-radius: 10%;
    color: white;
    padding: 5%;
    transition: 0.5s;
    cursor: pointer;
    :hover {
      opacity: 0.5;
    }
  }
`;

const Accordion = (props) => {
  const { data } = props;
  const ActionIcon = data.actions.icon;

  const [collapsedRows, setCollapsedRows] = useState([
    { id: -1, collapsed: false },
  ]);

  const upsert = (array, element) => {
    // (1)
    const i = array.findIndex((_element) => _element.id === element.id);
    if (i > -1) array[i] = element; // (2)
    else array.push(element);
    return array;
  };

  const toggleCollapse = (index) => {
    const rowState = collapsedRows.find((row, i) => row.id == index);
    const arr = upsert(collapsedRows, {
      id: index,
      collapsed: rowState ? !rowState.collapsed : false,
    });
    setCollapsedRows([...arr]);
   
  }; 

  return (
    <Container>
      {data.details.map((item, index) => {
        const selectedRow = collapsedRows.findIndex((row) => row.id == index);
        console.log(selectedRow);
        const collapsed =
          selectedRow >= 0 ? collapsedRows[selectedRow].collapsed : true;

        return (
          <div key={index} className="row">
            <div className="row-header">
              <label className="row-index">{index + 1}</label>
              {data.headers.map((header, index) => {
                return (
                  <span key={index}>
                    <label className="row-label">{header.label}</label>:{" "}
                    {item[header.key]}
                  </span>
                );
              })}
              <span>
                <label className="row-label">
                  Mostrar detalles{" "}
                  <BsFillCaretUpSquareFill
                    className="icon"
                    style={{ transform: "rotate(180deg)" }}
                    onClick={() => toggleCollapse(index)}
                  />
                </label>
              </span>
            </div>
            <div className={collapsed ? "row-details" : "row-details-show"}>
              <div className="data-details">
                {data.subHeaders.map((subHeader, index) => {
                  return (
                    <span key={index}>
                      <label className="row-label">{subHeader.label}: </label>{" "}
                      {item[subHeader.key]}
                    </span>
                  );
                })}
              </div>
              <div className="data-actions">
                <label className="row-label">{data.actions.label}</label>
                <ActionIcon className="action-icon" />
              </div>
            </div>
          </div>
        );
      })}
    </Container>
  );
};

Accordion.propTypes = {};

export default Accordion;
/*   */
