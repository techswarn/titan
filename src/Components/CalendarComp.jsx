//import Calendar from "react-calendar";
import DatePicker from "react-multi-date-picker"
import { Calendar } from "react-multi-date-picker"

import {useState} from "react"
//import "react-calendar/dist/Calendar.css";
//https://fullcalendar.io/docs/event-model
//https://blog.logrocket.com/react-calendar-tutorial-build-customize-calendar/
   // <Calendar onChange={setDate} value={date} selectRange={true}/>
import "./Calendar.css";
export default function CalendarComp() {
  const [value, setValue] = useState();
  return (
    <div className="calendar-container">
    <Calendar 
      value={value}
      onChange={setValue}
      className="custom-calendar"
    />
    </div>
  );
}
