import React from 'react'
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
    </div>
  )
}

export default Home