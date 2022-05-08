import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="text-center mt-5">
      <h3>Copyright &copy;{year}</h3>
    </div>
  );
};

export default Footer;
