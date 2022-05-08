import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useProducts from '../../Hooks/product';
import Detail from './Detail/Detail';

const ProductDetail = () => {
   const [service , setService] = useState({})
   const {productId} = useParams()
   useEffect(()=>{
       fetch(`product.json/${productId}`)
       .then(res => res.json())
       .then(data =>setService(data))
   },[])
    return (
      <div>
        {
            <h1>{service.name}</h1>
        }
        <Link to="/detail">
          <button className="btn btn-primary">click to see detail</button>
        </Link>
      </div>
    );
};

export default ProductDetail;