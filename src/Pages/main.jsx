import React from "react";
import classes from "../css/main.module.css";
import classes1 from "../css/reset.module.css";

import { Link } from "react-router-dom";
const main = () => {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.container__header}>
          <div class="header__logo"></div>
          <div className={classes.header__name}>Checkpoint</div>
          <div className={classes.sitevizit}>
            <a href="#" className={classes.sitelink}>
              Переход на сайт-визитку
            </a>
          </div>
        </div>
      </header>
      <content className={classes.content}>
        <div className={classes.container__grid}>
          <div className={classes.container__grid_main}>
            <p className={classes.textinside}>
              <Link to={"/jurnal"} className={classes.textlink}>
                Журнал посещений
              </Link>
            </p>
          </div>
          <div className={classes.container__grid_main}>
            <p className={classes.textinside}>
              <Link to={"/devices"} className={classes.textlink}>
                Список устройств
              </Link>
            </p>
          </div>
          <div className={classes.container__grid_main}>
            <p className={classes.textinside}>
              <Link to={"/personlist"} className={classes.textlink}>
                Список персон
              </Link>
            </p>
          </div>
          <div className={classes.container__grid_main}>
            <p className={classes.textinside}>
              <Link to={"/statistics"} className={classes.textlink}>
                Статистика
              </Link>
            </p>
          </div>
        </div>
      </content>
      <footer className={classes.footer}>
        <div className={classes.container__footer_flex}>
          <div className={classes.container__logo_flex}>
            <img
              src={"./images/Magnit.png"}
              alt="#"
              className={classes.footer__logo}
            />
            <div className={classes.footer__name}>Checkpoint</div>
          </div>
          <div className={classes.container__socialnetwork}>
            <a href="#" className={classes.oursocialnetwork}>
              <div className="inst"></div>
              <div className="vk"></div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default main;
