import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
export default function Home() {
  return (
    <div>
      <div className={style.homeParent}>
        <h1>React Learning</h1>
        <div className={style.menuItemsWrapper}>

          <Link className={style.menuItems} to={"/RickAndMorty"}>
            Rick and Morty
          </Link>
          <Link className={style.menuItems} to={"/ContactUs"}>
            Contact Us
          </Link>
          <Link className={style.menuItems} to={"/AboutUs"}>
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
}
