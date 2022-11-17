import React, { useState } from 'react'
import AppointmentBannar from '../AppintmentBannar/AppointmentBannar'
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments'

const Appointments = () => {
  const [selectedDate,setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppointmentBannar selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
      <AvailableAppointments selectedDate={selectedDate}/>
      </div>
  )
}

export default Appointments