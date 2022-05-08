import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../../firebase.init';


const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error] =
      useCreateUserWithEmailAndPassword(auth, { sendEmailVerification : true});

    const [updateProfile, updating, updateerror] = useUpdateProfile(auth);
    const navigate = useNavigate()

    const navigateLogin = () =>{
        navigate('/login')
    }
    if(user){
        navigate('/home')
    }
    const handleRegister = async(event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
       await createUserWithEmailAndPassword(email, password)
       await updateProfile({ displayName:name});
       console.log("Updated profile");
       navigate('/home')
    }
    return (
        <div className='register-info'>
            <h1>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id=""  placeholder='Your name '/>
                
                <input type="email" name="email" id="" placeholder='Your email' required/>
               
                <input type="password" name="password" id="" placeholder='Your password' required/>
                <input className='register-btn' type="submit" value="Register" />
                
            </form>
            <p>Already have an account ? <Link to='/login' className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;