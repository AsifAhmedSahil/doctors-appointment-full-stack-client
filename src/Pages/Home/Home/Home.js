import React from 'react'
import Appointments from '../Appointments/Appointments'
import Bannar from '../Bannar/Bannar'
import ContactUS from '../ContactUS/ContactUS'
import Features from '../Features/Features'

import InfoCards from '../InfoCard/InfoCards'
import Services from '../Services/Services'
import Testimonials from '../Testimonials/Testimonials'

const Home = () => {
  return (
    <div className='mx-5'>
        <Bannar/>
        <InfoCards/>
        <Services/>
        <Features/>
        <Appointments/>
        <Testimonials/>
        <ContactUS/>
        
    </div>
  )
}

export default Home