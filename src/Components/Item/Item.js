import React from 'react';
import './Item.css'

const Item = ({item}) => {
    const {name ,img , description, suplierName, price, quantity} = item;
    return (
      <div className="product-info">
        <img src={img} alt="" />
        <h2>{name}</h2>
        <p>Price:${price}</p>
        <p>Quantity:{quantity}</p>
        <p>Suplier Name:{suplierName}</p>
        <p>
          <small>Description: {description}</small>
        </p>
        <button className="btn btn-primary">
          Update
        </button>
      </div>
    );
};

export default Item;