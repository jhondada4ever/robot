import React from "react";

const Card = ({ name, email, id }) => {
  // const { name, email, id } = props;
  return (
    <div className=" tc bg-light-green dib br3  pa3 ma2 grow bw2 shadow-5">
      <img
        src={`https://robohash.org/${id}?200x200`}
        height="200"
        width="200"
        alt="Robot image"
        className=""
      />
      <div>
        <h2 className="">{name}</h2>
        <p className="">{email}</p>
      </div>
    </div>
  );
};

export default Card;
