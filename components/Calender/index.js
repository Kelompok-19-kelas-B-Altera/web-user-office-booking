import { useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import './App.css';

const CustomCalender = () => {
  const [date, setDate] = useState(new Date());
  // const locale = 'fr-CA'; 
  const formatShortWeekday = (locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]

  return(
     <div className=''>
      <p className='text-red-800'>Test Kalender</p>
      <div className='flex justify-center'>
        <Calendar 
          onChange={setDate} 
          value={date} 
          selectRange={true}
          formatShortWeekday={formatShortWeekday}
          />
      </div>
      <p className='text-center pt-5'>
      {date.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'>Default selected date:</span>{' '}
          {date.toDateString()}
        </p>
      )}
      </p>
    </div>
  )
}

export default CustomCalender;