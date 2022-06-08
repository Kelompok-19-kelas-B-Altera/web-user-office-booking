import { useState } from "react";
import {Users} from "../component-search-feature/users";
import Table from "../component-search-feature/TableSearch";

export default function Searchfeature() {
      const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email","gender"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
return (
  <div className="app">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
    {<Table data={search(Users)} />}
  </div>
  );
}
