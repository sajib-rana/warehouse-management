import React from 'react';

const Item = ({item}) => {
    const {name ,img , description, suplierName, price, quantity} = item;
    return (
      <div className="service-info">
        <img src={img} alt="" />
        <h2>{name}</h2>
        <p>Price:${price}</p>
        <p>
          <small>{description}</small>
        </p>
        <button className="btn btn-primary">
          Book Now
        </button>
      </div>
    );
};

export default Item;