import LiveChat from '../components/LiveChat'
import CardBuilding from "../components/CardBuilding";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={`${styles.container} relative bg-slate-600 pl-10 pr-40`}>
      <LiveChat />
      <div className="">
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
  )
}
