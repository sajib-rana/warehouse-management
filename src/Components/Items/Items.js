import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
      fetch("warehouse.json")
        .then((res) => res.json())
        .then((data) => setItems(data));
    }, []);
    return (
        <div id='services' className='services'>
            <h1 className='service-title'> Our Services</h1>
            <div className="services-container">
                {
                items.map(item => <Item
                key={item._id}
                item = {item}
                ></Item>)
            }
            </div>
        </div>
    );
};

export default Items;