import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {

  return (
    <div>
      <p>User Office Booking</p>
      <Link href={"/testKalender"}><p className='underline text-blue-700 cursor-pointer'>Example Kalender</p></Link>
    </div>
  )
}
