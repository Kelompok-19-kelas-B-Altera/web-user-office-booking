import axios from "axios";
import React, { useEffect, useState } from "react";
import ListItemFilter from "./ListItem";

// INI DATA DUMMY (GANTI DENGAN API COMPLEX)
import { complex } from "../../component-search-feature/complex";

// INI URL & TOKEN API (TOKEN GANTI DENGAN YANG DISIMPAN DI COOKIE)
const url = "http://108.136.240.248/api/v1/complex";
// const token =
//   "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiVVNFUiIsImZ1bGxuYW1lIjoidXNlciIsImVtYWlsIjoidXNlckBnbWFpbC5jb20iLCJpYXQiOjE2NTU5MTMyNTAsImV4cCI6MTY1NTkxNjg1MH0.fiP5Mb2WHlZ7JsL-aIOgDtt6IHDu3AImprBJsP5q_Ck";

const Filter = ({ state, setState }) => {
  // INI UNTUK TESTING DATA DUMMY, KALAU PAKAI API LIHAT DI BAWAH
  // const [options, setOptions] = useState(complex);

  // KALAU MAU KONEK KE API PAKAI KODE DIBAWAH, DI UNCOMMENT AJA. TRUS STATE OPTIONS DI ATAS HAPUS AJA
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const { data } = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`,
          },
        });
        setOptions(data.data);
        // console.log(data.data);
      } catch (error) {
        console.log(error);
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setOptions]);

  if (isLoading) return <>Loading...</>;
  if (hasError) return <>Has Error...</>;

  function handleCheckboxChange(key) {
    let sel = state.selections;
    let find = sel.indexOf(key);
    if (find > -1) {
      sel.splice(find, 1);
    } else {
      sel.push(key);
    }

    setState({
      selections: sel,
    });
  }

  function checkboxItems() {
    return (
      <>
        {options.map((option) => (
          <ListItemFilter
            key={option.id}
            text={option.city}
            handleOnChange={() => handleCheckboxChange(option.id)}
            selected={state.selections.includes(option.id)}
          ></ListItemFilter>
        ))}
      </>
    );
  }

  return (
    <>
      <div className="">
        <h1 className="text-base font-semibold text-center mb-1.5">
          Filter Lokasi
        </h1>
        <div className="flex flex-col gap-[15px] p-2.5">{checkboxItems()}</div>
        {/* <p>{state.selections.toString()}</p> */}
      </div>
    </>
  );
};

export default Filter;
