import React from "react";

const ReviewCard = ({ review }) => {
  const { name, img, review: userreview, location } = review;
  return (
    <div className="card  shadow-xl">
      <div className="card-body">
        <p>{userreview}</p>
        <div className="flex items-center mt-10">
          <div className="avatar mr-10">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt=""/>
            </div>
          </div>
          <div>
                <h4 className="text-lg">{name}</h4>
                <h4>{location}</h4>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
