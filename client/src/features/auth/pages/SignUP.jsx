import React, { useState } from 'react';
import { Link } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import Lottie from "lottie-react";
import signUpAnimation from "../../../assets/LottieFiles/signup-animation.json";

const SignUP = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
    }

    return (
        <div className="hero bg-base-200 min-h-screen py-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie className='w-100' animationData={signUpAnimation} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="font-semibold text-center text-xl">Create an account</h1>
                        <form onSubmit={handleSignUp} className="fieldset">
                        <label className="label">Your Name</label>
                        <input type="text" className="input" name='name' placeholder="Enter your name" required />
                        <label className="label">Photo URL</label>
                        <input type="text" className="input" name='photo' placeholder="Enter your photo url" required />
                        <label className="label">Email</label>
                        <input type="email" className="input" name='email' placeholder="Enter your email" required />
                        <label className="label">Password</label>
                        <div className='relative'>
                            <input type={showPassword ? "text" : "password"} className="input" name='password' placeholder="Enter your password" required />
                            <button type='button' onClick={() => {setShowPassword(!showPassword)}} className='absolute top-3 right-7 cursor-pointer'>
                                {
                                    showPassword ? <IoEyeOutline size={15} /> : <IoEyeOffOutline size={15} />
                                }
                            </button>
                        </div>
                        <div className='flex items-center gap-1 mt-2'>
                            <input type="checkbox" defaultChecked className="checkbox h-5 w-5" />
                            <a className="link link-hover">Accept Term & Conditions</a>
                        </div>
                        <input type="submit" className="btn btn-neutral border-dotted shadow-none border-gray-50 mt-4" value="Register" />
                        </form>
                        <h4 className="text-gray-500 text-center">Already Have an Account ? <Link to={'/auth/signin'} className="text-red-600">SignIn</Link></h4>
                        <div className="flex items-center gap-2">
                            <div className="flex-1 border-t border-gray-400"></div>
                            <h4 className="text-gray-600 text-sm">Or</h4>
                            <div className="flex-1 border-t border-gray-400"></div>
                        </div>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline mt-1">
                        <FcGoogle className="text-xl" /> Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUP;