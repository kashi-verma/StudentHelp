
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const AuthButtons = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/signin');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="flex flex-row gap-4 w-full max-w-sm mx-auto">
      <Button 
        onClick={handleSignIn}
        variant="primary"
        className="flex-1 px-4 py-2 text-sm"
      >
        Sign In
      </Button>
      <Button 
        onClick={handleSignUp}
        variant="primary"
        className="flex-1 px-4 py-2 text-sm"
      >
        Sign Up
      </Button>
    </div>
  );
};

export default AuthButtons;
