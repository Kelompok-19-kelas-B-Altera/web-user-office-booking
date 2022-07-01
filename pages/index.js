import LiveChat from "../components/LiveChat";
import CardBuilding from "../components/CardBuilding";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Footer from "../components/Footer";
import Search from "../components/SearchFeature/Search";
import Filter from "../components/FilterFeature/Filter";
import FilterByName from "../components/FilterByTime";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import FilterResult from "../components/FilterResult";
import axios from "axios";

const url = "http://108.136.240.248/api/v1/building";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiVVNFUiIsImZ1bGxuYW1lIjoidXNlciIsImVtYWlsIjoidXNlckBnbWFpbC5jb20iLCJpYXQiOjE2NTU5MTMyNTAsImV4cCI6MTY1NTkxNjg1MH0.fiP5Mb2WHlZ7JsL-aIOgDtt6IHDu3AImprBJsP5q_Ck";

export default function Home() {
  const token = Cookies.get("token");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState({
    selections: [],
  });

  const [buildings, setBuildings] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [buildingResult, setBuildingResult] = useState([]);
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
        setBuildings(data.data);
        console.log(data.data);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setBuildings]);

  if (isLoading) return <>Loading...</>;
  if (hasError) return <>Has Error...</>;

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

  const buildingFilterHandler = (data) => {
    const hasilFiltering = Array.isArray(data)
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

    setBuildingResult(hasilFiltering);
    return;
  };

  const removeOptions = (remove) => {
    remove();
  };

  const buildingResetHandler = () => {
    setBuildingResult([]);
    setFilter({
      selections: [],
    });
    setQuery("");
  };

  return (
    <div className="flex flex-col items-center" style={{ width: "100%" }}>
      <LiveChat />
      <section
        className={`${styles.sideBarContainer} fixed left-0 top-0 flex justify-center z-40`}
      >
        <div className="flex flex-col gap-5 items-center text-center">
          {token ? (
            <div>
              <Link href="/profile">
                <a>
                  <img
                    src="/building.svg"
                    alt="profile"
                    width={137}
                    height={137}
                    className="w-[137px] h-[137px] rounded-full object-cover mb-3.5"
                  />
                </a>
              </Link>
              <Link href="/profile">
                <a className="text-base text-blue capitalize">name</a>
              </Link>
            </div>
          ) : (
            <div className="w-[187px] h-[71px] mb-[25px]">
              <p className="text-xl mb-3">Anda belum masuk</p>
              <div className="flex gap-2">
                <Link href="/login">
                  <a>
                    <button className="w-[90px] h-[36px] bg-blue text-white text-sm rounded-sm">
                      Masuk
                    </button>
                  </a>
                </Link>
                <Link href="/signup">
                  <a>
                    <button className="w-[90px] h-[36px] border border-blue text-blue text-sm rounded-sm">
                      Daftar
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          )}
          <Filter state={filter} setState={setFilter} />
          <FilterByName />
          <div className="w-[187px] h-[71px] mb-[25px]">
            <div className="flex gap-2">
              <button
                onClick={() => buildingFilterHandler(buildings)}
                className="w-[90px] h-[36px] bg-blue text-white text-sm rounded-sm"
              >
                Apply
              </button>
              <button
                onClick={() => buildingResetHandler()}
                className="w-[90px] h-[36px] border border-blue text-blue text-sm rounded-sm"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.container} relative flex justify-end`}>
        <div className={`${styles.moreContainer} flex flex-col`}>
          <header className="w-full flex justify-between">
            <Search setQuery={setQuery} />
            <img src="/officity-logo.svg" alt="logo" />
          </header>
          <FilterResult result={buildingResult} />
          <div className="" style={{ marginTop: "41px" }}>
            <h1 className="font-semibold text-3xl mb-8">Banyak dilihat</h1>
            <div className={`${styles.listBuilding} flex justify-between`}>
              <CardBuilding
                buildingImage={"/building1.svg"}
                rating={"4.7"}
                buildingName={"Sarana Square"}
                buildingLocation={["Tebet", "Jakarta Selatan"]}
              />
              <CardBuilding
                buildingImage={"/building1.svg"}
                rating={"4.7"}
                buildingName={"Sarana Square"}
                buildingLocation={["Tebet", "Jakarta Selatan"]}
              />
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-3xl mb-6 mt-9">Rekomendasi</h1>
            <div className={`${styles.listBuilding} flex justify-between mb-6`}>
              <CardBuilding
                buildingImage={"/building1.svg"}
                rating={"4.7"}
                buildingName={"Sarana Square"}
                buildingLocation={["Tebet", "Jakarta Selatan"]}
              />
              <CardBuilding
                buildingImage={"/building1.svg"}
                rating={"4.7"}
                buildingName={"Sarana Square"}
                buildingLocation={["Tebet", "Jakarta Selatan"]}
              />
            </div>
            <div className={`${styles.listBuilding} flex justify-between mb-6`}>
              <CardBuilding
                buildingImage={"/building1.svg"}
                rating={"4.7"}
                buildingName={"Sarana Square"}
                buildingLocation={["Tebet", "Jakarta Selatan"]}
              />
              <CardBuilding
                buildingImage={"/building1.svg"}
                rating={"4.7"}
                buildingName={"Sarana Square"}
                buildingLocation={["Tebet", "Jakarta Selatan"]}
              />
            </div>
            <div className={`${styles.listBuilding} flex justify-between mb-6`}>
              <CardBuilding
                buildingImage={"/building1.svg"}
                rating={"4.7"}
                buildingName={"Sarana Square"}
                buildingLocation={["Tebet", "Jakarta Selatan"]}
              />
              <CardBuilding
                buildingImage={"/building1.svg"}
                rating={"4.7"}
                buildingName={"Sarana Square"}
                buildingLocation={["Tebet", "Jakarta Selatan"]}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
