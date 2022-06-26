import styles from '../styles/Home.module.css'
import CardBuilding from "../components/CardBuilding";
import DetailCard from '../components/DetailCard';
import { useSelector, useDispatch } from 'react-redux';

export default function Home() {
  const toggleChat = useSelector((state) => state.liveChat.toggleChat) 
  console.log(toggleChat)
  return (
    <>
      <DetailCard
      nameBuilding="Sarana Square"
      buildingLocation={["Tebet", "Jakarta Selatan"]}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra"
      facilities={[["bandara", "2 KM"], ["rumah sakit", "2 KM"], ["mall", "2 KM"], ["coffee shop", "2 KM"]]}
      rating="4.7"
      totalReview="(281 Reviews)"
      />
    </>
    // <section className={styles.filter}>
    //   <div>
    //     <img src="/profile.svg" alt="imgProfile" className={styles.profile} />
    //     <p >Casey Kenz</p>
    //   </div>  
    //   <div className={styles.filterLocation}>
    //     <h3>Filter Location</h3>
    //       <div className={styles.location}>
    //         <input type="checkbox" name="location" className={styles.checkbox} />
    //         <p for="location1" className={styles.labelLocation}>Location 1</p>
    //       </div>
    //       <div className={styles.location}>
    //         <input type="checkbox" name="location" className={styles.checkbox} />
    //         <p for="location1" className={styles.labelLocation}>Location 2</p>
    //       </div>
    //       <div className={styles.location}>
    //         <input type="checkbox" name="location" className={styles.checkbox} />
    //         <p for="location1" className={styles.labelLocation}>Location 3</p>
    //       </div>
    //       <div className={styles.location}>
    //         <input type="checkbox" name="location" className={styles.checkbox} />
    //         <p for="location1" className={styles.labelLocation}>Location 4</p>
    //       </div>
    //       <div className={styles.location}>
    //         <input type="checkbox" name="location" className={styles.checkbox} />
    //         <p for="location1" className={styles.labelLocation}>Location 5</p>
    //       </div>
    //       <div className={styles.location}>
    //         <input type="checkbox" name="location" className={styles.checkbox} />
    //         <p for="location1" className={styles.labelLocation}>Location 6</p>
    //       </div>
    //   </div>
    //   <div>
    //     <h3>Tanggal Periode</h3>
    //       <div className={styles.periodeTanggal}>
    //         <input type="date" name="tanggalCheckIn" value="" placeholder='Tanggal' className={styles.inputTanggal}/>
    //         <input type="date" name="tanggalCheckOut" value="" className={styles.inputTanggal}/>
    //       </div>
    //   </div>
    // </section>
    // <section className={styles.container}>
    //   <div>
    //     <input type="text" name="search" placeholder="Search" className={styles.search}/>
    //   </div>
    //   <h1 className={styles.titleCategory}>Category</h1>
    //   <div className={styles.category}>
    //     <div className={styles.listCategory}>
    //       <p className={styles.itemCategory}>Jakarta Timur</p>
    //     </div>
    //     <div className={styles.listCategory}>
    //       <p className={styles.itemCategory}>Jakarta Selatan</p>
    //     </div>
    //     <div className={styles.listCategory}>
    //       <p className={styles.itemCategory}>Jakarta Barat</p>
    //     </div>
    //     <div className={styles.listCategory}>
    //       <p className={styles.itemCategory}>Jakarta Utara</p>
    //     </div>
    //     <div className={styles.listCategory}>
    //       <p className={styles.itemCategory}>Jakarta Pusat</p>
    //     </div>
    //   </div>
    // <h1>Most View</h1>
    //   <div className={styles.mostView}>
    //     <div className={styles.card}>
    //       <img src="/building.svg" alt="buildingImage"/>
    //       <div className={styles.cardCointainer}>
    //         <div className={styles.buildingInformation}>
    //           <h3>Purpose Building</h3>
    //           <p>Jakarta Selatan</p>
    //         </div>
    //         <div className={styles.buildingRating}>
    //           <p>4.7</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={styles.card}>
    //       <img src="/building.svg" alt="buildingImage"/>
    //       <div className={styles.cardCointainer}>
    //         <div className={styles.buildingInformation}>
    //           <h3>Purpose Building</h3>
    //           <p>Jakarta Selatan</p>
    //         </div>
    //         <div className={styles.buildingRating}>
    //           <p>4.7</p>
    //         </div>
    //       </div>
    //     </div>
         
    //   </div>
    // </section>
  )
}
