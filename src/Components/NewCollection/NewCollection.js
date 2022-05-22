import React from 'react';
import Collection from '../../images/NewCollection.jpg'

const NewCollection = () => {
    return (
      <div>
        <h2 className='mt-5 bg-success w-75 mx-auto rounded'>New Collection See here</h2>
        <div className='d-flex w-50 mt-5 mx-auto'>
          <img className='' src={Collection} alt="" />
          <div >
            <h3>Oppo Reno8</h3>
            <p>
              type: 6.43 inches, 99.8 cm2 (~84.7% screen-to-body ratio).
              Resulation: 1080 x 2400 pixels, 20:9 ratio (~409 ppi density).
              Ram: 128GB 8GB RAM, 256GB 12GB. Sensor: Fingerprint (under
              display, optical), accelerometer, gyro, proximity, compass.
            </p>
            <button className='btn btn-primary'>See Detail</button>
          </div>
        </div>
      </div>
    );
};

export default NewCollection;