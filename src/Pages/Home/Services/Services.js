import React from "react";
import Fluride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const servicesData =[
        {
            id:1,
            name: "Fluride Tretment",
            description:"Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person’s teeth to improve health and reduce the risk of cavities",
            img:Fluride
        },
        {
            id:2,
            name: "Cavity Filling",
            description:"A cavity filling is a form of dental filling wherein the dentist removes the decayed segment of the tooth and fills that portion with a material like metal or ceramic, to prevent further damage to the tooth",
            img:cavity
        },
        {
            id:3,
            name: "whitening",
            description:"The most common side effect of teeth whitening is temporary tooth sensitivity.",
            img:whitening
        },
    ]
  return (
    <>
      <div className="mt-10 pt-7">
        <h2 className="lg:text-4xl md:text-2xl text-xl text-cyan-400 font-bold text-center ">
          OUR SERVICES
        </h2>
        <h2 className="lg:text-6xl md:text-4xl text-2xl mt-4 text-center">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
        {
                servicesData.map(service =><ServiceCard key={service.id} service={service}></ServiceCard>)
        }
      </div>
    </>
  );
};

export default Services;
