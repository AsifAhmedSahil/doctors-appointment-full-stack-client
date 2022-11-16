import React from 'react'
import Appointments from '../Appointments/Appointments'
import Bannar from '../Bannar/Bannar'
import Features from '../Features/Features'
import InfoCards from '../InfoCard/InfoCards'
import Services from '../Services/Services'

const Home = () => {
  return (
    <div className='mx-5'>
        <Bannar/>
        <InfoCards/>
        <Services/>
        <Features/>
        <Appointments/>
    </div>
  )
}

export default Home