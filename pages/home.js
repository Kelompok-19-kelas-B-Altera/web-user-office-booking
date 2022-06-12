import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <section className={styles.filter}>
      <div>
        <img src="/profile.svg" alt="imgProfile" className={styles.profile} />
        <p >Casey Kenz</p>
      </div>  
      <div className={styles.filterLocation}>
        <h3>Filter Location</h3>
          <div className={styles.location}>
            <input type="checkbox" name="location" className={styles.checkbox} />
            <p for="location1" className={styles.labelLocation}>Location 1</p>
          </div>
          <div className={styles.location}>
            <input type="checkbox" name="location" className={styles.checkbox} />
            <p for="location1" className={styles.labelLocation}>Location 2</p>
          </div>
          <div className={styles.location}>
            <input type="checkbox" name="location" className={styles.checkbox} />
            <p for="location1" className={styles.labelLocation}>Location 3</p>
          </div>
          <div className={styles.location}>
            <input type="checkbox" name="location" className={styles.checkbox} />
            <p for="location1" className={styles.labelLocation}>Location 4</p>
          </div>
          <div className={styles.location}>
            <input type="checkbox" name="location" className={styles.checkbox} />
            <p for="location1" className={styles.labelLocation}>Location 5</p>
          </div>
          <div className={styles.location}>
            <input type="checkbox" name="location" className={styles.checkbox} />
            <p for="location1" className={styles.labelLocation}>Location 6</p>
          </div>
      </div>
      <div>
        <h3>Tanggal Periode</h3>
          <div className={styles.periodeTanggal}>
            <input type="date" name="tanggalCheckIn" value="" placeholder='Tanggal' className={styles.inputTanggal}/>
            <input type="date" name="tanggalCheckOut" value="" className={styles.inputTanggal}/>
          </div>
      </div>
    </section>
    <section className={styles.container}>
      <div>
        <input type="text" name="search" placeholder="Search" className={styles.search}/>
      </div>
      <h1 className={styles.titleCategory}>Category</h1>
      <div className={styles.category}>
        <div className={styles.listCategory}>
          <p className={styles.itemCategory}>Jakarta Timur</p>
        </div>
        <div className={styles.listCategory}>
          <p className={styles.itemCategory}>Jakarta Selatan</p>
        </div>
        <div className={styles.listCategory}>
          <p className={styles.itemCategory}>Jakarta Barat</p>
        </div>
        <div className={styles.listCategory}>
          <p className={styles.itemCategory}>Jakarta Utara</p>
        </div>
        <div className={styles.listCategory}>
          <p className={styles.itemCategory}>Jakarta Pusat</p>
        </div>
      </div>
    <h1>Most View</h1>
      <div className={styles.mostView}>
        <div className={styles.card}>
          <img src="/building.svg" alt="buildingImage"/>
          <div className={styles.cardCointainer}>
            <div className={styles.buildingInformation}>
              <h3>Purpose Building</h3>
              <p>Jakarta Selatan</p>
            </div>
            <div className={styles.buildingRating}>
              <p>4.7</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/building.svg" alt="buildingImage"/>
          <div className={styles.cardCointainer}>
            <div className={styles.buildingInformation}>
              <h3>Purpose Building</h3>
              <p>Jakarta Selatan</p>
            </div>
            <div className={styles.buildingRating}>
              <p>4.7</p>
            </div>
          </div>
        </div>
         
      </div>
    </section>
    </>
  )
}
