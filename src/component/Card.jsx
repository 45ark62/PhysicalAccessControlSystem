import React, { useEffect, useState } from "react";
import axios from "axios";
import "../scss/main.scss";
import "../scss/ftable.scss";

import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <tr className="trstyle">
      <td className="tdstyle1">{props.id}</td>

      <Link
        to={`/modalPerson/${props.personId}`}
        style={{ textDecoration: "none" }}
        id={props.personId}
      >
        <td className="tdstyle2">{props.FIO}</td>
      </Link>
      <td className="tdstyle3">{props.deviceId}</td>
      <Link
        className=" tdstyle3  "
        to={`/modalDevice/${props.deviceId}`}
        style={{ all: "unset" }}
        id={props.deviceId}
      >
        <td className=" tdstyle4 tableicon "></td>
      </Link>

      <td className="tdstyle5">{props.Data}</td>
      <td className="tdstyle6">{props.AccessLockType}</td>
    </tr>
  );
};

export default Card;
