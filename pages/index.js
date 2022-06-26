import LiveChat from "../components/LiveChat";
import CardBuilding from "../components/CardBuilding";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Footer from "../components/Footer";
import Search from "../components/SearchFeature/Search";

export default function Home() {
  return (
    <div className="flex flex-col items-center" style={{ width: "100%" }}>
      <LiveChat />
      <section className={`${styles.sideBarContainer} fixed left-0 top-0 flex justify-center`}>
        <div className="flex flex-col gap-5">
          <div>photo & name</div>
          <div>filter</div>
          <div>tanggal periode</div>
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
