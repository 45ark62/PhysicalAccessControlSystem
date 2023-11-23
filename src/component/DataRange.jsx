import React, { useState, useEffect } from "react";
import axios from "axios";
import "../scss/main.scss";
import "../scss/ftable.scss";
const DataRange = () => {
  return (
    <div>
      <label
        htmlFor="deviceFilter"
        style={{ marginBottom: "50px", marginLeft: "70px" }}
      >
        Выберите устройство:
      </label>
    </div>
  );
};

export default DataRange;
