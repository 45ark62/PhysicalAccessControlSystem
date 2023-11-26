import React, { useState, useEffect } from "react";

const EditPerson = ({ editPerson, personToEdit, closeEditPerson }) => {
  console.log("!!!!!!!!!!!!1", personToEdit);

  const [Surname, setSurname] = useState(personToEdit.Surname);
  const [Name, setName] = useState(personToEdit.Name);
  const [Patronymic, setPatronymic] = useState(personToEdit.Patronymic);
  const [Job, setJob] = useState(personToEdit.Job);
  const [Workplace, setWorkplace] = useState(personToEdit.Workplace);
  const [PhoneNumber, setPhoneNumber] = useState(
    personToEdit?.PhoneNumber || ""
  );

  const saveEditedPerson = (event) => {
    event.preventDefault();
    const editedPerson = {
      id: personToEdit.id, // добавьте id для идентификации персоны
      Surname: Surname,
      Name: Name,
      Patronymic: Patronymic,
      Job: Job,
      Workplace: Workplace,
      PhoneNumber: PhoneNumber,
    };
    editPerson(editedPerson);
    console.log("edit", editedPerson);
    closeEditPerson(); // Закрываем окно редактирования после сохранения
  };

  return (
    <div className="modal">
      <div id="close_modal" onClick={closeEditPerson}>
        &#10006;
      </div>
      <form onSubmit={saveEditedPerson} className="form_txt">
        <div>
          Введите фамилию:{" "}
          <input
            type="text"
            value={Surname}
            onChange={(event) => setSurname(event.target.value)}
          />
        </div>
        <div>
          Введите имя:{" "}
          <input
            type="text"
            value={Name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          Введите отчество:{" "}
          <input
            type="text"
            value={Patronymic}
            onChange={(event) => setPatronymic(event.target.value)}
          />
        </div>
        <div>
          Введите должность:{" "}
          <input
            type="text"
            value={Job}
            onChange={(event) => setJob(event.target.value)}
          />
        </div>
        <div>
          Введите рабочее место:{" "}
          <input
            type="text"
            value={Workplace}
            onChange={(event) => setWorkplace(event.target.value)}
          />
        </div>
        <div>
          Введите номер телефона:{" "}
          <input
            type="text"
            value={PhoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
        <div>
          <button className="addBTN" type="submit">
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPerson;
