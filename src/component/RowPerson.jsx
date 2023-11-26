// RowPerson.js
import React from "react";

const RowPerson = (props) => {
  const handleDelete = () => {
    if (props.deletePersonItem) {
      props.deletePersonItem(props.id);
    }
  };
  console.log("row", props.personToEdit);
  const handleEdit = () => {
    if (props.openEditPerson) {
      props.openEditPerson(props.id);
    }
  };

  return (
    <>
      <tr className="trstyleDev">
        <td className="tdstyle">{props.id}</td>
        <td className="tdstyle">
          {props.F} {props.I} {props.O}
        </td>
        <td className="tdstyle">{props.Job}</td>
        <td className="tdstyle">{props.Workplace}</td>
        <td className="tdstyle">{props.PhoneNumber}</td>
        <div onClick={handleDelete} className="delete"></div>
        <div onClick={handleEdit} className="edit"></div>
      </tr>
    </>
  );
};

export default RowPerson;
