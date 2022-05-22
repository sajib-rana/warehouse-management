import React from "react";
import bg from "../../images/bg.png";

const Contact = () => {
  return (
    <div style={{ background: `url(${bg})` }} className="mt-5 w-75 m-auto">
      <div>
        <h3 className="text-success">Contact us</h3>
        <h2>Stay Connected With Us</h2>
      </div>
      <form >
        <input className="mt-2 w-50 p-2 rounded fs-5" type="text" placeholder="Your name" />
        <br />
        <input className="mt-2 w-50 p-2 rounded fs-5" type="text" placeholder="Your address" />
        <br />
        <textarea className="mb-2 mt-2 w-50 h-5 p-2 rounded fs-5" type="text" placeholder="Your opinion" />
      </form>
    </div>
  );
};

export default Contact;
