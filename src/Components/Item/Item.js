import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({item}) => {
    const {_id, name ,img , description, suplierName, price, quantity} = item;
    const navigate = useNavigate();
    const ProductDetail = (id) => {
      navigate(`/item/${id}`);
    };
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
        <button onClick={()=>ProductDetail(_id)} className="btn btn-primary">
          Update
        </button>
      </div>
    );
};

export default Item;