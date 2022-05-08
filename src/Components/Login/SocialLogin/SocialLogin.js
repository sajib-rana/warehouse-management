import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import google from '../../../images/google.png'



const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">Error: {error.message}</p>;
  }
  if (user) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="w-50 bg-primary"></div>
        <p className="mt-2 mx-3">or</p>
        <div style={{ height: "1px" }} className="w-50 bg-primary"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 mx-auto d-block"
        >
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-2"> Google sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
