import { format } from 'date-fns'
import React from 'react'

const AvailableAppointments = ({selectedDate}) => {
  return (
    <section className='mt-16'>
        <p className='font-bold text-green-500 text-2xl text-center'>Available Appointment Date: {format(selectedDate,"PP")}</p>
        
    </section>
  )
}

export default AvailableAppointments