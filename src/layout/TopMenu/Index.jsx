import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

export default function TopMenu() {
  return (
    <>
      <div className={style.menuWrapper}>
        <Link className={style.menuItems} to={"/"}>Home</Link>
        <Link className={style.menuItems} to={"/RickAndMorty"}>Rick and Morty</Link>
        <Link className={style.menuItems} to={"/ContactUs"}>Contact Us</Link>
        <Link className={style.menuItems} to={"/AboutUs"}>About Us</Link>
      </div>
    </>
  );
}
