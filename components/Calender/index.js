// import { useState } from 'react';
import Calendar from 'react-calendar';

const CustomCalender = ({date, setDate}) => {
  // const [date, setDate] = useState(new Date());
  const formatShortWeekday = (locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]

  return(
      <Calendar 
        onChange={setDate} 
        value={date} 
        selectRange={true}
        formatShortWeekday={formatShortWeekday}
        />
  )
}

export default CustomCalender;