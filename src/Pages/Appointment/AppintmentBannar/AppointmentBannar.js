import React from "react";
import chair from "../../../assets/images/chair.png"

const AppointmentBannar = () => {
  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-sm rounded-lg shadow-2xl" alt=""
          />
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBannar;
