import React from "react";
import styles from "./general.module.css";
import ProductPanel from "../Components/GeneralPage/ProductPanel";
import DataForm from "../Components/GeneralPage/DataForm";
import DataRecord from "../Components/GeneralPage/DataRecord";
import PropTypes from "prop-types";

const General = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gridTemplate}>
        <div className={styles.productPanel}>
          <ProductPanel />
        </div>
        <div className={styles.dataForm}>
          <DataForm />
        </div>
        <div className={styles.dataRecord}>
          <DataRecord />
        </div>
      </div>
    </div>
  );
};

General.propTypes = {};

export default General;
