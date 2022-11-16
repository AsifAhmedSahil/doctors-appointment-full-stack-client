import React from 'react'
import quote from "../../../assets/icons/quote.svg"
import people1 from "../../../assets/images/people1.png"
import people2 from "../../../assets/images/people2.png"
import people3 from "../../../assets/images/people3.png"
import ReviewCard from './ReviewCard'

const Testimonials = () => {
    const reviews = [
        {
            id:1,
            name:"Winson Henrry",
            review:"Clients constantly request you for advice to solve their problems. You’ve become quite the go-to person with our customers.",
            img:people1,
            location: "California"
        },
        {
            id:2,
            name:"Sanjida Alam",
            review:"Clients constantly request you for advice to solve their problems. You’ve become quite the go-to person with our customers.",
            img:people2,
            location: "Ojana Sohor"
        },
        {
            id:1,
            name:"Asif Ahmed",
            review:"Clients constantly request you for advice to solve their problems. You’ve become quite the go-to person with our customers.",
            img:people3,
            location: "Chandgaon, Chittagong"
        },
    ]
  return (
    <section>

        <div className='flex justify-between mt-10'>
            <div>
                <h4 className="text-2xl text-cyan-500 font-bold">Testimonials</h4>
                <h4 className="text-4xl">What Our Patients Say</h4>
            </div>
            <figure>

                <img className='w-24 lg:w-48' src={quote} alt="" />
            </figure>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
            {
                reviews.map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)
            }
        </div>
        
    </section>
  )
}

export default Testimonials