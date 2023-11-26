// TablePersons.js
import React from "react";
import RowPerson from "./RowPerson";

const TablePersons = ({
  personL,
  deletePersonItem,
  openEditPerson,
  personToEdit,
  closeEditPerson,
  setShowEditPerson,
}) => {
  return (
    <>
      {personL.map((personItem) => (
        <RowPerson
          key={personItem.id}
          id={personItem.id}
          F={personItem.Surname}
          I={personItem.Name}
          O={personItem.Patronymic}
          Job={personItem.Job}
          Workplace={personItem.Workplace}
          PhoneNumber={personItem.PhoneNumber}
          deletePersonItem={deletePersonItem}
          openEditPerson={openEditPerson}
          personToEdit={personToEdit}
          closeEditPerson={closeEditPerson}
          setShowEditPerson={setShowEditPerson}
        />
      ))}
    </>
  );
};

export default TablePersons;
