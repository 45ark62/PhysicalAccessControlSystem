import React from "react";
import Card from "./Card";
import Filtr from "./Filtr";
const Table = ({ historyList }) => {
  return (
    <>
      {historyList.map((item) => (
        <Card
          id={item.id}
          personId={item.ForeignPerson}
          FIO={item.FIO}
          deviceId={item.ForeignDevice}
          Data={item.DateTime}
          AccessLockType={item.AccessLockType}
        />
      ))}
    </>
  );
};
export default Table;
