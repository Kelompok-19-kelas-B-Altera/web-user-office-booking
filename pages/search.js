import { useState } from "react";
import { Users } from "../component-search-feature/users";
import Table from "../component-search-feature/TableSearch";
import FilterCard from "../components/FilterCard";

export default function Searchfeature() {
  const [query, setQuery] = useState("");
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [locations, setLocations] = useState([
    {
      id: "jakartaPusat",
      name: "Jakarta Pusat",
      checked: false,
    },
    {
      id: "bali",
      name: "Bali",
      checked: false,
    },
    {
      id: "medan",
      name: "Medan",
      checked: false,
    },
    {
      id: "surabaya",
      name: "Surabaya",
      checked: false,
    },
    {
      id: "bandung",
      name: "Bandung",
      checked: false,
    },
  ]);
  const [checkInPeriod, setCheckInPeriod] = useState("2022-01-01");
  const [checkOutPeriod, setCheckOutPeriod] = useState("2022-01-02");

  const keys = ["first_name", "last_name", "email", "gender"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  const toggleIsOpenFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  return (
    <div className="app">
      <FilterCard
        locations={locations}
        setLocations={setLocations}
        isOpen={isOpenFilter}
        setIsOpen={toggleIsOpenFilter}
        checkInPeriod={checkInPeriod}
        checkOutPeriod={checkOutPeriod}
        setCheckInPeriod={setCheckInPeriod}
        setCheckOutPeriod={setCheckOutPeriod}
      />
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <button
        className="ml-4 bg-gray-200 px-4 py-2 rounded font-bold"
        onClick={toggleIsOpenFilter}
      >
        filter
      </button>

      {<Table data={search(Users)} />}
    </div>
  );
}
