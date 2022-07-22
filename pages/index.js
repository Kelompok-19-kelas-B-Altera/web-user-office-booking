import Head from "next/head";
import LiveChat from "../components/LiveChat";
import HeaderLogo from "../components/HeaderLogo";
import CardBuilding from "../components/CardBuilding";
import Recomendation from "../components/Recomendation";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Footer from "../components/Footer";
import Filter from "../components/FilterFeature/Filter";
import FilterByTime from "../components/FilterByTime";
import Cookies from "js-cookie";
import { decodeToken } from "react-jwt";
import ButtonsFilter from "../components/ButtonsFilter";
import { useEffect, useState } from "react";
import axiosInstance from "../networks/apis";
import MostViews from "../components/MostViews";
import FilterButton from "../components/FilterFeature/FilterButton";
import FilterResult from "../components/FilterResult";
import { Buildings } from "../component-search-feature/buildings";
import Search from "../components/SearchFeature/Search";
import moment from "moment";
import axios from "axios";

export default function Home() {
  const token = Cookies.get("token");
  const tokenDecoded = decodeToken(token);
  console.log(tokenDecoded);
  let [userImage, setUserImage] = useState();

  // FILTER & SEARCH FEATURE
  const [query, setQuery] = useState("");
  const [queryPicked, setQueryPicked] = useState("");
  const [buildingSearch, setBuildingSearch] = useState([]);
  const [filterTemp, setFilterTemp] = useState({ selections: [] });
  const [filter, setFilter] = useState([]);
  const [dateTemp, setDateTemp] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [resultFilter, setResultFilter] = useState([]);

  // UNTUK DATA DARI DUMMY DATA, INITIAL STATE di USE STATE ganti jadi Buildings
  // const [buildings, setBuildings] = useState(Buildings);

  const [buildings, setBuildings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const { data } = await axiosInstance.get("/api/v1/building", {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`,
          },
        });
        setBuildings(data.data);
        setBuildingSearch(data.data);
        console.log(data.data);
      } catch (error) {
        console.log(error);
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setBuildings]);

  useEffect(() => {
    setBuildingSearch([]);
    buildings?.forEach((e) => {
      if (e.building_name.match(new RegExp(query, "i"))) {
        setBuildingSearch((each) => [...each, e]);
      }
      console.log(e);
    });
  }, [query]);

  useEffect(() => {
    console.log(buildingSearch);
  }, [buildingSearch]);

  useEffect(() => {
    setResultFilter([]);
    buildings?.forEach((e) => {
      if (e.building_name === queryPicked) {
        setResultFilter((each) => [...each, e]);
      }
      // console.log(e);
    });
  }, [queryPicked]);

  // if (isLoading) return <>Loading...</>;
  // if (hasError) return <>Has Error... </>;

  // Get user image
  useEffect(() => {
    if (tokenDecoded) {
      axiosInstance
        .get(`/api/v1/user/management/${tokenDecoded?.id}`)
        .then((res) => {
          setUserImage(res.data.data.pic_url);
          console.log(res.data.data.pic_url);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [tokenDecoded]);

  const keys = ["building_name", "address"];

  const buildingApplyHandler = () => {
    setFilter(filterTemp.selections);
    setDate(dateTemp);
    getFilterResult();
  };

  const buildingFilterHandler = (data) => {
    console.log(filterTemp.selections);
    console.log("lose " + filter);
    const hasilFiltering = Array.isArray(data)
      ? data.filter((item) => {
          let checkIfTrue = true;
          if (date[0] && date[1]) {
            checkIfTrue = item.schedules?.some((schedule) => {
              const fromDate = moment(schedule.from_date, "DD-MM-YYYY hh:mm:ss").toDate();
              const untilDate = moment(schedule.until_date, "DD-MM-YYYY hh:mm:ss").toDate();

              if (schedule.ready === true) {
                if (new Date(date[0]) >= fromDate && new Date(date[1]) <= untilDate) {
                  return true;
                } else {
                  return false;
                }
              } else {
                return false;
              }
            });
          }

          // supaya data ditampilkan semua walaupun checklistnya 0
          let filterComplexCheck = filter.includes(item.complex.id);
          if (filter.length === 0) {
            filterComplexCheck = true;
          }

          return (
            checkIfTrue &&
            filterComplexCheck &&
            keys.some((key) => {
              return item[key].toLowerCase().includes(query);
            })
          );
        })
      : [];

    // setBuildingResult(hasilFiltering);
    return hasilFiltering;
  };

  const getFilterResult = () => {
    setResultFilter(buildingFilterHandler(buildings));
  };

  const buildingResetHandler = () => {
    setFilter([]);
    setFilterTemp({ selections: [] });
    setQuery("");
    setDate(new Date());
    setDateTemp(new Date());
    setResultFilter([]);
  };

  // END : FITUR SEARCH & FILTER

  // console.log(queryPicked);

  return (
    <div>
      <Head>
        <title>Officity</title>
        <link rel="icon" href="/officity-logo.svg" />
      </Head>
      <div className="flex flex-col items-center" style={{ width: "100%" }}>
        <LiveChat />
        <section
          className={`${styles.sideBarContainer} fixed left-0 top-0 flex justify-center z-40`}
        >
          <div className="flex flex-col gap-5 items-center text-center">
            <div className="flex flex-col justify-center items-center">
              {token ? (
                <>
                  <Link href={`/profile/${tokenDecoded.email}`}>
                    <a>
                      <img
                        src={userImage}
                        alt="profile"
                        width={137}
                        height={137}
                        className="w-[137px] h-[137px] rounded-full object-cover mb-3.5"
                      />
                    </a>
                  </Link>
                  <Link href={`/profile/${tokenDecoded.email}`}>
                    <a className="text-base text-blue capitalize">{tokenDecoded.fullname}</a>
                  </Link>
                </>
              ) : (
                <>
                  <p className="text-xl mb-3">Anda belum masuk</p>
                  <div className="flex gap-2 mb-[25px]">
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
                </>
              )}
            </div>

            {/* ------- Kode Search Filter ------ */}
            <Filter state={filterTemp} setState={setFilterTemp} />
            <FilterByTime date={dateTemp} setDate={setDateTemp} />
            <FilterButton
              buildingFilterHandler={buildingApplyHandler}
              buildingResetHandler={buildingResetHandler}
            />
            {/* ------- Kode Search Filter ------ */}
            {/* <Filter />
          <FilterByTime />
        <ButtonsFilter /> */}
          </div>
        </section>

        <section className={`${styles.container} relative flex justify-end`}>
          <div className={`${styles.moreContainer} flex flex-col`}>
            <HeaderLogo
              setQuery={setQuery}
              query={query}
              setQueryPicked={setQueryPicked}
              buildings={buildingSearch}
            />
            {/* <header className="w-full flex justify-between">
            <Search
            setQuery={setQuery}
            query={query}
            buildings={buildingFilterHandler(buildings)}
            />
            <img src="/officity-logo.svg" alt="logo" />
          </header> */}
            <FilterResult
              // result={buildingFilterHandler(buildings)}
              result={resultFilter}
            />
            {resultFilter.length === 0 && (
              <>
                <div className="" style={{ marginTop: "33px" }}>
                  <MostViews />
                </div>
                <Recomendation />
              </>
            )}
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
