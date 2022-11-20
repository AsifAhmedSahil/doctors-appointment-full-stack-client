import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import React, {  useState } from 'react'
import Loading from '../../Shared/Loading/Loading'
import BookingModal from '../BookingModal/BookingModal'
import AppointmentOption from './AppointmentOption'

const AvailableAppointments = ({selectedDate}) => {
    // const [appointmentOptions,setAppointmentOptions] = useState([])
    const [treatment,setTreatment] = useState(null)
    const date = format(selectedDate,"PP");

    const {data:appointmentOptions = [],refetch,isLoading} = useQuery({
      queryKey:['appointmentOptions',date],
      queryFn: ()=>fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
      .then(res => res.json())
    })

    if(isLoading){
      return <Loading/>
    }

    // useEffect(()=>{
    //     fetch("http://localhost:5000/appointmentOptions")
    //     .then(res => res.json())
    //     .then(data => setAppointmentOptions(data))
    // },[])
  return (
    <section className='my-16'>
        <p className='font-bold text-green-500 text-2xl text-center'>Available Appointment Date: {format(selectedDate,"PP")}</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
            {appointmentOptions.map(option => <AppointmentOption key={option._id} 
            appointmentOption={option}
            setTreatment={setTreatment}
            ></AppointmentOption>)}
        </div>
        {
          treatment &&
          <BookingModal selectedDate={selectedDate}
            treatment={treatment}
            refetch={refetch}
             setTreatment={setTreatment}></BookingModal>
        }
        
    </section>
  )
}

export default AvailableAppointments