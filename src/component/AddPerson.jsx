import React, { useState } from "react";
const AddPerson = ({ appendPerson }) => {
  const [Surname, setSurname] = useState("");
  const [Name, setName] = useState("");
  const [Patronymic, setPatronymic] = useState("");
  const [Job, setJob] = useState("");
  const [Workplace, setWorkplace] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [showAddPerson, setShowAddPerson] = useState(true);
  const addNewPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      Surname: Surname,
      Name: Name,
      Patronymic: Patronymic,
      Job: Job,
      Workplace: Workplace,
      PhoneNumber: PhoneNumber,
    };
    console.log(newPerson);
    appendPerson(newPerson);
    // После добавления персоны можно закрывать форму
    setShowAddPerson(false);
  };

  const toggleAddPerson = () => {
    //переключатель для закрытия формы
    setShowAddPerson((prev) => !prev);
  };

  return (
    showAddPerson && (
      <div className="modal">
        <div id="close_modal" onClick={toggleAddPerson}>
          &#10006;
        </div>
        <form onSubmit={addNewPerson} className="form_txt">
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
              Добавить
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default AddPerson;
