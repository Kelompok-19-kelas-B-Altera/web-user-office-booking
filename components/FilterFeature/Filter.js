import axios from "axios";
import axiosInstance from "../networks/apis";
import React, { useEffect, useState } from "react";
import ListItemFilter from "./ListItem";

// INI DATA DUMMY (GANTI DENGAN API COMPLEX)
import { complex } from "../../component-search-feature/complex";

const Filter = ({ state, setState }) => {
  // INI UNTUK TESTING DATA DUMMY, KALAU PAKAI API LIHAT DI BAWAH
  // const [options, setOptions] = useState(complex);

  // KALAU MAU KONEK KE API PAKAI KODE DIBAWAH, DI UNCOMMENT AJA. TRUS STATE OPTIONS DI ATAS HAPUS AJA
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const getAllSelections = (options) => {
      let arrOpt = [];
      options.map((option) => {
        arrOpt.push(option.id);
      });
      setState({
        selections: arrOpt,
      });
    };
    const fetchData = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const { data } = await axiosInstance.get("/api/v1/complex", {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`,
          },
        });
        // getAllSelections(data.data);
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

  // if (isLoading) return <>Loading...</>;
  // if (hasError) return <>Has Error...</>;

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
