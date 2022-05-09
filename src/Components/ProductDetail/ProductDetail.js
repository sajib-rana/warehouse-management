
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';



const ProductDetail = () => {
   const {productId} = useParams();
  const [service, setService] = useState({});

  useEffect(()=>{
    fetch(`http://localhost:5000/product/${productId}`)
    .then(res =>res.json())
    .then(data => console.log(data))
  },[])
    return (
      <div>
        <h3>details:{service.name}</h3>
        <Link to="/detail">
          <button className="btn btn-primary">click to see detail</button>
        </Link>
      </div>
    );
};

export default ProductDetail;