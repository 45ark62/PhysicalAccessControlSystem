import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ModalPerson = () => {
  const { id } = useParams();
  console.log("Person ID from useParams:", id);
  const [localPerson, setLocalPerson] = useState(null);

  useEffect(() => {
    async function getPersonById() {
      try {
        const getPerson = await axios.get(
          `http://127.0.0.1:8000/api/person/${id}`
        );
        setLocalPerson(getPerson.data);
        console.log(getPerson.data);
      } catch (error) {
        console.error("Error fetching person:", error.message);
      }
    }

    getPersonById();
  }, [id]);

  return (
    <>
      {localPerson && (
        <div className="modal">
          <Link to="/jurnal" style={{ textDecoration: "none" }}>
            <div id="close_modal">&#10006;</div>
          </Link>
          <div className="modal_txt">
            Id сотрудника: {localPerson.id}
            <br />
            Сотрудник: {localPerson.Surname} {localPerson.Name}{" "}
            {localPerson.Patronymic} <br />
            Должность: {localPerson.Job} <br />
            Место работы: {localPerson.Workplace} <br />
            Номер телефона: {localPerson.PhoneNumber} <br />
            Личная фотография сотрудника: <br />
            <div className="img"></div>
            <img src={localPerson.Foto} className="workerphoto" alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default ModalPerson;
