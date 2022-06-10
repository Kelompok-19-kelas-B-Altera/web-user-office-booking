import LiveChat from '../components/LiveChat'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={`${styles.container} relative bg-slate-600 w-full h-screen`}>
      User Office Booking
      <LiveChat />
    </div>
  )
}
