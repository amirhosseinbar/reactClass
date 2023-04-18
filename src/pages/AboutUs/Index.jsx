import React from "react";
import FixHeader from "../../components/common/FixHeader";
import style from "./style.module.css";

export default function Index() {
  return (
    <div className={style.text}>
      <FixHeader />
      <div className={style.header}>About Us</div>
      <br />
      This Page called About Us !
      <br />
      You can put information about your website, business, workplace or field
      of work on this page so that users know you better.
    </div>
  );
}
