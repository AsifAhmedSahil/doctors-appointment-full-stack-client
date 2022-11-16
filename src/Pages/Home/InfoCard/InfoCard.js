import React from 'react'

const InfoCard = ({card}) => {
    console.log(card);
    const {name,icons,description,bgclass} = card
  return (
    <div className={`card p-6 card-side shadow-xl ${bgclass}`}>
  <figure><img src={icons} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    
  </div>
</div>
  )
}

export default InfoCard