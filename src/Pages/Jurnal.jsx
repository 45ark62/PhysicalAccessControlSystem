import "../scss/main.scss";
import "../scss/ftable.scss";
import { Link } from "react-router-dom";
import Table from "../component/Table";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Filtr from "../component/Filtr";
const Jurnal = () => {
  const [history, setHistory] = useState([]); //массив объектов журнала посещений
  const [selectedForeignDevice, setSelectedForeignDevice] = useState(""); //для отслеживания выбранного устройства
  const Api = "http://127.0.0.1:8000/api";
  //получаем историю из бэка
  async function fetchHistory() {
    try {
      const getHistory = await axios.get(Api + "/history");

      console.log(getHistory.data);
      setHistory(getHistory.data); //поместить список журнала посещений в массив
      console.log("History data:", getHistory.data);
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
  //запрос данных при загрузке страницы
  useEffect(() => {
    fetchHistory();
  }, []); // Пустой массив зависимостей означает, что эффект будет запущен только при монтировании

  //отслеживание изменения выпадающего списка
  const handleDeviceChange = (ForeignDevice) => {
    setSelectedForeignDevice(ForeignDevice);
    console.log("Selected Device ID (handleDeviceChange):", ForeignDevice);
  };
  //фильтрация таблицы по устройству
  const filteredHistory = selectedForeignDevice
    ? history.filter((entry) => entry.ForeignDevice == selectedForeignDevice)
    : history;
  console.log("f history:", filteredHistory);

  return (
    <div>
      <header className="header">
        <div className="container__header">
          <div class="header__logo"></div>
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
      <div>
        <Filtr onDeviceChange={handleDeviceChange} />
      </div>
      <div className="tablewrap">
        <table className="tablestyle">
          <thead>
            <tr>
              <th className="thstyle head">ID</th>
              <th className="thstyle head">ФИО</th>
              <th className="thstyle head">Устройство</th>
              <th className="thstyle head">СКУД</th>
              <th className="thstyle head">Дата и время</th>
              <th className="thstyle head">Вход/Выход</th>
            </tr>
          </thead>
          <tbody>
            <Table historyList={filteredHistory} />
          </tbody>
        </table>
      </div>
      <footer className="footer">
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

export default Jurnal;
