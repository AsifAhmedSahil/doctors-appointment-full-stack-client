import React from 'react'
import clock from "../../../assets/icons/clock.svg"
import Marker from "../../../assets/icons/marker.svg"
import phone from "../../../assets/icons/phone.svg"
import InfoCard from './InfoCard'

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: "Opening Time",
            description: "open 9 to 5 everyday",
            icons: clock,
            // bgclass : "bg-[#0FCFEC]",
            bgclass : "bg-gradient-to-r from-purple-500 to-red-500",
        },
        {
            id: 2,
            name: "Our Location",
            description: "open 9 to 5 everyday",
            icons: Marker,
            bgclass : "bg-[#3A4256]"
        },
        {
            id: 3,
            name: "Contact Us",
            description: "open 9 to 5 everyday",
            icons: phone,
            // bgclass : "bg-[#1bae82] ",
            bgclass : "bg-gradient-to-r from-green-300 to-blue-500",
        },
    ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 text-white '>
        {
            cardData.map(card => <InfoCard key={card.id} card={card}></InfoCard>)
        }
    </div>
  )
}

export default InfoCards