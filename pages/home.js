import styles from '../styles/Home.module.css'
import CardBuilding from "../components/CardBuilding";
import DetailCard from '../components/DetailCard';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link'

export default function Home() {
    return (
      <ul>
        <li>
          <Link href="/post/abc">
            <a>Go to pages/post/[pid].js</a>
          </Link>
        </li>
        <li>
          <Link href="/post/abc?foo=bar">
            <a>Also goes to pages/post/[pid].js</a>
          </Link>
        </li>
        <li>
          <Link href="/post/abc/a-comment">
            <a>Go to pages/post/[pid]/[comment].js</a>
          </Link>
        </li>
      </ul>
    )
  };
