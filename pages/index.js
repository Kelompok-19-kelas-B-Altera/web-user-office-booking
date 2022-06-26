import LiveChat from "../components/LiveChat";
import CardBuilding from "../components/CardBuilding";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Footer from "../components/Footer";
import Search from "../components/SearchFeature/Search";
import Filter from "../components/FilterFeature/Filter";
import FilterByName from "../components/FilterByTime";
import Cookies from "js-cookie";

export default function Home() {
  const token = Cookies.get("token");

  return (
    <div className="flex flex-col items-center" style={{ width: "100%" }}>
      <LiveChat />
      <section className={`${styles.sideBarContainer} fixed left-0 top-0 flex justify-center z-40`}>
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
          <Filter />
          <FilterByName />
        </div>
      </section>

      <section className={`${styles.container} relative flex justify-end`}>
        <div className={`${styles.moreContainer} flex flex-col`}>
          <header className="w-full flex justify-between">
            <Search />
            <img src="/officity-logo.svg" alt="logo" />
          </header>
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
