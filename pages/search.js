// Library or Hooks
import { useState } from "react";

// Component 
import { TableSearch } from "../component";

// Utils
import { Users } from "../utils/datadummy/users";

// Not Found
// import '../styles/search.css'

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
      <TableSearch data={search(Users)} />
    </div>
  );
}
