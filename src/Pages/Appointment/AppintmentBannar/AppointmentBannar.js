import React from "react";
import chair from "../../../assets/images/chair.png"
import { DayPicker } from 'react-day-picker';



const AppointmentBannar = ({selectedDate,setSelectedDate}) => {
  
  return (
    <div>
      <div className="hero my-6">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-sm rounded-lg shadow-2xl" alt=""
          />
          <div>
          <DayPicker className="mr-6"
             mode="single"
             selected={selectedDate}
             onSelect={setSelectedDate}
          />
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBannar;
