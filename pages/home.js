import styles from '../styles/Home.module.css'
import MostViews from '../components/MostViews';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import axiosInstance from '../networks/apis';

export default function Home() {
    return (
      <MostViews />
    )
  };
