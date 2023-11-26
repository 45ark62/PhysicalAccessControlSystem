import "../scss/main.scss";
import "../scss/ftable.scss";
import { Link } from "react-router-dom";
import TableP from "../component/TablePersons";
import AddPerson from "../component/AddPerson";
import EditPerson from "../component/EditPerson";
import React, { useState, useEffect } from "react";
import axios from "axios";
const PersonList = () => {
  const [personList, setPerList] = useState([]); //массив объектов устройств
  const [showAddPerson, setShowAddPerson] = useState(false); // для скрытия и показа формы добавления устройства
  const [showEditPerson, setShowEditPerson] = useState(false);
  const [personToEdit, setPersonToEdit] = useState(null);
  const Api = "http://127.0.0.1:8000/api";
  async function fetchHistory() {
    //получить всех персон
    try {
      const getPersonList = await axios.get(Api + "/person/list");

      setPerList(getPersonList.data); //поместить список  в массив
    } catch (error) {
      console.error("Error fetching history:", error.message);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      } else if (error.request) {
        console.error("No response received");
      } else {
        console.error("Error message:", error.message);
      }
    }
  }
  useEffect(() => {
    fetchHistory();
  }, []); // Пустой массив зависимостей означает, что эффект будет запущен только при монтировании
  //показать/скрыть форму добавления персоны
  const toggleAddPerson = () => {
    setShowAddPerson((prev) => !prev);
  };
  //удаление персоны
  const deletePerson = async (id) => {
    try {
      // Выполняем запрос DELETE на удаление устройства
      await axios.delete(Api + `/person/${id}`);

      // Обновляем состояние, убирая удаленное устройство из массива
      setPerList((prevPersons) =>
        prevPersons.filter((person) => person.id !== id)
      );
    } catch (error) {
      console.error("Error deleting person:", error.message);
      // Обработка ошибок удаления персоны
    }
  };
  //добавление персоны
  const appendPerson = async (newPerson) => {
    try {
      // Выполняем запрос POST на добавление персоны
      await axios.post(Api + `/person`, newPerson);
      // Обновляем состояние, добавляя  персону в массив
      setPerList((prevPersons) => [...prevPersons, newPerson]);
    } catch (error) {
      console.error("Error adding perspn:", error.message);
      // Обработка ошибок добавления персоны
    }
  };
  // редактирование персоны
  const editPerson = async (editedPerson) => {
    try {
      await axios.patch(
        Api + `/person/${editedPerson.id}/update_info`,
        editedPerson
      );
      setPerList((prevPersons) =>
        prevPersons.map((person) =>
          person.id === editedPerson.id ? editedPerson : person
        )
      );
    } catch (error) {
      console.error("Error editing person:", error.message);
    }
  };

  const openEditPerson = (id) => {
    //открыть окно редактирования
    const person = personList.find((p) => p.id === id);
    setPersonToEdit(person);
    console.log("personToEdit", person);
    setShowEditPerson(true);
  };

  const closeEditPerson = () => {
    //закрыть окно редактирования
    setShowEditPerson(false);
    setPersonToEdit(null);
  };
  return (
    <div>
      <header className="header">
        <div className="container__header">
          <div className="header__logo"></div>
          <div className="header__name">Checkpoint</div>
          <div className="backtomain">
            <Link to="/home" className="sitelink">
              Вернуться на главную
            </Link>
          </div>
          <div className="sitevizit">
            <a href="#" className="sitelink">
              Переход на сайт-визитку
            </a>
          </div>
        </div>
      </header>
      <div>{showAddPerson && <AddPerson appendPerson={appendPerson} />} </div>
      <div>
        {showEditPerson && (
          <EditPerson
            editPerson={editPerson}
            personToEdit={personToEdit}
            closeEditPerson={closeEditPerson}
          />
        )}{" "}
      </div>
      <div className="tablewrap">
        <table className="tablestyle">
          <thead>
            <tr>
              <th className="thstyle head">ID</th>
              <th className="thstyle head">ФИО</th>
              <th className="thstyle head">Должность</th>
              <th className="thstyle head">Рабочее место</th>
              <th className="thstyle head">Номер</th>
            </tr>
          </thead>
          <tbody>
            <TableP
              personL={personList}
              deletePersonItem={deletePerson}
              openEditPerson={openEditPerson}
              personToEdit={personToEdit}
              closeEditPerson={closeEditPerson}
              setShowEditPerson={setShowEditPerson}
            />
          </tbody>
        </table>
      </div>
      <div className="add" onClick={toggleAddPerson}></div>
      <footer className="footer" style={{ marginTop: "220px" }}>
        <div className="container__footer-flex">
          <div className="container__logo-flex">
            <img src="./images/Magnit.png" alt="#" className="footer__logo" />
            <div className="footer__name">Checkpoint</div>
          </div>
          <div className="container__socialnetwork">
            <a href="#" className="oursocialnetwork">
              <div className="inst"></div>
              <div className="vk"></div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PersonList;
