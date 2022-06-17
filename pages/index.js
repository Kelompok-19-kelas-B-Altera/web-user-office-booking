import LiveChat from '../components/LiveChat'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {

  return (
    <div className={`${styles.container} relative bg-slate-600 w-full h-screen bg-secondary`}>
      <LiveChat />
      <Link href={"/testKalender"}><p className='underline text-blue-700 cursor-pointer'>Example Kalender</p></Link>
      User Office Booking
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic perspiciatis minus veniam minima quaerat corporis ex officiis natus reprehenderit beatae.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic perspiciatis minus veniam minima quaerat corporis ex officiis natus reprehenderit beatae.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic perspiciatis minus veniam minima quaerat corporis ex officiis natus reprehenderit beatae.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic perspiciatis minus veniam minima quaerat corporis ex officiis natus reprehenderit beatae.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic perspiciatis minus veniam minima quaerat corporis ex officiis natus reprehenderit beatae.
    </div>
  )
}
