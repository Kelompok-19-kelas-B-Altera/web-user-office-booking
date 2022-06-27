import { useEffect, useState } from "react";
import Table from "../component-search-feature/TableSearch";
import FilterCard from "../components/FilterCard";
import Filter from "../components/FilterFeature/Filter";
import Search from "../components/SearchFeature/Search";

// INI DATA DUMMY (GANTI DENGAN API BUILDING)
import { Buildings } from "../component-search-feature/buildings";

// INI URL & TOKEN API (TOKEN GANTI DENGAN YANG DISIMPAN DI COOKIE)
const url = "http://108.136.240.248/api/v1/building";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiVVNFUiIsImZ1bGxuYW1lIjoidXNlciIsImVtYWlsIjoidXNlckBnbWFpbC5jb20iLCJpYXQiOjE2NTU5MTMyNTAsImV4cCI6MTY1NTkxNjg1MH0.fiP5Mb2WHlZ7JsL-aIOgDtt6IHDu3AImprBJsP5q_Ck";

export default function Searchfeature() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState({
    selections: [],
  });

  const [buildings, setBuildings] = useState(Buildings);

  console.log(buildings);

  // const [buildings, setBuildings] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  // const [hasError, setHasError] = useState(false);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     setHasError(false);
  //     try {
  //       const { data } = await axios.get(url, {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setBuildings(data.data);
  //     } catch (error) {
  //       setHasError(true);
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, [setBuildings]);

  // if (isLoading) return <>Loading...</>;
  // if (hasError) return <>Has Error...</>;

  const keys = ["building_name", "address"];
  const search = (data) => {
    return Array.isArray(data)
      ? data.filter((item) => {
          return (
            filter.selections.includes(item.complex.id) &&
            keys.some((key) => {
              // console.log("Hwllo " + item[key]);
              return item[key].toLowerCase().includes(query);
            })
          );
        })
      : [];
  };

  return (
    <div className="app">
      <Search setQuery={setQuery} />
      <Filter state={filter} setState={setFilter} />
      {/* NANTI TABEL DIBAWAH INI GANTI PAKAI CARD */}
      {<Table data={search(buildings)} />}
    </div>
  );
}

// TIDAK DIGUNAKAN, CUMA COBA STYLE AJA.

// const searchBox = (
//   <div className="flex justify-center">
//     <div className="mb-3 xl:w-96">
//       <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
//         <input
//           type="search"
//           className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//           placeholder="Search"
//           aria-label="Search"
//           aria-describedby="button-addon2"
//         />
//         <button
//           className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
//           type="button"
//           id="button-addon2"
//         >
//           <svg
//             aria-hidden="true"
//             focusable="false"
//             data-prefix="fas"
//             data-icon="search"
//             className="w-4"
//             role="img"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 512 512"
//           >
//             <path
//               fill="currentColor"
//               d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
//             ></path>
//           </svg>
//         </button>
//       </div>
//     </div>
//   </div>
// );

// const searchBox3 = (
//   <input
//     className="search"
//     placeholder="Search..."
//     onChange={(e) => setQuery(e.target.value.toLowerCase())}
//   />
// );
