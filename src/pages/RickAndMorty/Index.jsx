import axios from "axios";
import React, { useEffect, useState } from "react";
import FixHeader from "../../components/common/FixHeader";
import style from "./style.module.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export default function RickAndMorty() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState({ code: 200, text: "" });
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(
    function () {
      console.log("search");
      setLoading(true);
      axios
        .get("https://rickandmortyapi.com/api/character?name=" + search)
        .then((res) => {
          setData(res.data.results);
          setError({ code: 200, text: "" });
        })
        .catch((res) => {
          setError({
            code: res.response.status,
            text: res.response.data.error,
          });
        })
        .finally(() => {
          setLoading(false);

        });
    },
    [search]
  );
  useEffect(
    function () {
      console.log("pageNumber", pageNumber);
      setLoading(true);
      axios
        .get("https://rickandmortyapi.com/api/character/?page=" + pageNumber)
        .then((res) => {
          setData(res.data.results);
          setError({ code: 200, text: "" });
        })
        .catch((res) => {
          setError({
            code: res.response.status,
            text: res.response.data.error,
          });
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [pageNumber]
  );

  return (
    <>
      <FixHeader />
      <div className={style.searchBoxWrapper}>
        <input
          className={style.searchInput}
          type={"text"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />
      </div>
      {loading && (
        <div className={style.loadingSection}>
          {" "}
          <CircularProgress />
        </div>
      )}
      <div className={style.charWrapper}>
        {error.code === 200
          ? data.map((char) => (
              <div
                key={char.id}
                className={style.charCard}
                onClick={() => {
                  alert(char.name);
                }}
              >
                <img
                  src={char.image}
                  alt={char.name}
                  className={style.charImg}
                />
                <div>{char.name}</div>
              </div>
            ))
          : error.text}
        <div className={style.pagination}>
          <Stack spacing={2}>
            <Pagination
              count={42}
              variant="outlined"
              color="primary"
              onChange={(e, page) => {
                setPageNumber(page);
              }}
            />
          </Stack>
        </div>
      </div>
    </>
  );
}
