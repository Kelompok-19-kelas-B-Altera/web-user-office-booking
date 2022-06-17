import styles from '../styles/Home.module.css'
import CustomCalender from '../components/Calender'
import { useState } from 'react'

export default function PageKalender() {
  const [date, setDate] = useState(new Date())
  const [close, setClose] = useState(false)
  return (
    <div>
      <p>User Office Booking</p>
      <div>
        <p>Example GetData :</p>
        {date.length > 0 ? (
        <p>
          <span className='font-bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='font-bold'>End:</span> {date[1].toDateString()}
          </p>
        ) : (
          <p>
            <span className='font-bold'>Default selected date:</span>{' '}
            {date.toDateString()}
          </p>
        )}
      </div>
      <div className='relative'>
        <button onClick={() => setClose(!close)} className="p-1 border bg-[#FF6338] text-white">Show Button</button>
        <div className={`absolute ${close ? "block" : "hidden"}`}>
          <CustomCalender date={date} setDate={setDate}/>
        </div>
      </div>
    </div>
  )
}
