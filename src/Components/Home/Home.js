import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';

import Items from '../Items/Items';
import NewCollection from '../NewCollection/NewCollection';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Contact></Contact>
            <NewCollection></NewCollection>
        </div>
    );
};

export default Home;