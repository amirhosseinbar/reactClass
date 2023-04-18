import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import style from './style.module.css'
export default function FixHeader() {
  return (
    <div className={style.fixHeaderWrapper}>
      <Link className={""} to={"/"}>
        <ArrowBackIcon color="primary" fontSize="large"/>
      </Link>
    </div>
  );
}
