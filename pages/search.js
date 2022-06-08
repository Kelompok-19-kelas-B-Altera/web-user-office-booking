import { useState } from "react";
import {Users} from "../public/users";
import Table from "../public/TableSearch"
import '../styles/search.css'

export default function App() {
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
