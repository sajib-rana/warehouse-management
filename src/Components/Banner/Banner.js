import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import img1 from  '../../images/store.jpg'
import img2 from  '../../images/store2.jpg'
import img3 from  '../../images/store3.jpg'

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
        <Carousel.Caption>
          <h3>Your Expected Phone</h3>
          <p>
            we are ensure the quality the product and care every man so that he
            can fomfortable use it.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Your Expected Phone</h3>
          <p>
            we are ensure the quality the product and care every man so that he
            can fomfortable use it.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Your Expected Phone</h3>
          <p>
            we are ensure the quality the product and care every man so that he
            can fomfortable use it.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
