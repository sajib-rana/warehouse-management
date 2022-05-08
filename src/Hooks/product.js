import { useEffect, useState } from "react";

const useProducts=() =>{
    const [items, setItems] = useState([])

   
        useEffect(() => {
      fetch("warehouse.json")
        .then((res) => res.json())
        .then((data) => setItems(data));
        
    }, []);
    
   return [items, setItems];
}
export default useProducts;