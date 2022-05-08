import React, { useRef } from 'react';
import { Button, Form, Toast } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate();
     const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
  signInWithEmailAndPassword,
  user,
  loading,
  error,
] = useSignInWithEmailAndPassword(auth);
   
const [sendPasswordResetEmail] =
     useSendPasswordResetEmail(auth);
  
     if(user){
     navigate(from, { replace: true });
  }
  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>
  }
    const handleSubmit = event =>{
          event.preventDefault()
          const email = emailRef.current.value;
          const password = passwordRef.current.value;
          signInWithEmailAndPassword(email, password)
    }
    const resetPassword = async() =>{
      const email = emailRef.current.value;
      if(email){
         await sendPasswordResetEmail(email);
         toast("Sent email");
      }
      else{
        toast('Please enter your email address');
      }
    }
    const navigateRegister = event =>{
          navigate('/register')
    }
    return (
      <div className="container w-50">
        <h1 className="text-primary text-center">Please Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button
            className="w-50 mx-auto d-block"
            variant="primary"
            type="Submit"
          >
            Login
          </Button>
          {errorElement}
        </Form>
        <p>
          New to Phone store?{" "}
          <Link
            to="/register"
            className="text-primary text-decoration-none"
            onClick={navigateRegister}
          >
            Please Register
          </Link>
        </p>
        <p>
          Forget password?{" "}
          <button
            className="btn btn-link text-primary text-decoration-none"
            onClick={resetPassword}
          >
            Reset Password
          </button>
        </p>
        <SocialLogin></SocialLogin>
        <ToastContainer />
      </div>
    );
};

export default Login;