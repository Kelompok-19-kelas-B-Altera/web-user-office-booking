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
import { useEffect } from "react";
import axiosInstance from "../networks/apis";
import MostViews from "../components/MostViews";

export default function Home() {
  const token = Cookies.get("token");
  const tokenDecoded = decodeToken(token);

  console.log(token);

  return (
    <div className="flex flex-col items-center" style={{ width: "100%" }}>
      <LiveChat />
      <section className={`${styles.sideBarContainer} fixed left-0 top-0 flex justify-center z-40`}>
        <div className="flex flex-col gap-5 items-center text-center">
          <div className="flex flex-col justify-center items-center">
            {token ? (
              <>
                <Link href={`/profile/${tokenDecoded.email}`}>
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
          <Filter />
          <FilterByTime />
          <ButtonsFilter />
        </div>
      </section>

      <section className={`${styles.container} relative flex justify-end`}>
        <div className={`${styles.moreContainer} flex flex-col`}>
          <HeaderLogo />
          <div style={{ marginTop: "33px" }}>
            <MostViews />
          </div>
          <Recomendation/>
        </div>
      </section>
      <Footer />
    </div>
  );
}
