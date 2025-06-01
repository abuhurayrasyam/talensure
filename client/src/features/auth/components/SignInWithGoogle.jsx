import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext/AuthContext';
import { FcGoogle } from 'react-icons/fc';

const SignInWithGoogle = () => {

    const {googleSignIn} = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then((result) => {
            alert('Google SignIn Successful')
            console.log(result.user)
        })
        .catch((error) => {
            alert('Google SignIn UnSuccessful')
            console.log(error)
        })
    }

    return (
        <button onClick={handleGoogleSignIn} className="btn btn-outline mt-1"><FcGoogle className="text-xl" />Continue with Google</button>
    );
};

export default SignInWithGoogle;