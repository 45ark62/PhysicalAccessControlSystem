import "../scss/main.scss";
import "../scss/ftable.scss";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
const Statistics = () => {
  const [STAT, setStat] = useState([]);

  const Api = "http://127.0.0.1:8000/api";
  async function fetchHistory() {
    try {
      const getStat = await axios.get(Api + "/person/list");

      setStat(getStat.data);
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
      <></>
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

export default Statistics;
