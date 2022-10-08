import React from "react";

import styles from "./css/title.module.css";

const Title = () => {
  return (
    <>
      <h3>
        <span>Ingresa </span>
        <span>tu</span>
        <span>url</span>
        <span> para </span>
        <span> acortarla </span>
        <div className={styles.scrollMore}>↓</div>
      </h3>
    </>
  );
};

export default Title;
