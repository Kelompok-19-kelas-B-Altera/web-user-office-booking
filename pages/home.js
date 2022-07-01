import styles from '../styles/Home.module.css'
import NearbyFacility from '../components/NearbyFacilities';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import axiosInstance from '../networks/apis';

export default function Home() {

  const [building, setBuilding] = useState({});

  useEffect(() => {
    axiosInstance
      .get(`/api/v1/building/1`)
      .then((res) => {
        console.log(res.data.data);
        setBuilding(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      }
      );
  }, []);
  
  const nearby = building?.nearby_facilities;
    return (
      <NearbyFacility 
      facilities={nearby}
      />
    )
  };
