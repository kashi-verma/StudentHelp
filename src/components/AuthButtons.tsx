
import React from 'react';
import Button from './Button';

const AuthButtons = () => {
  const handleSignIn = () => {
    console.log('Sign In clicked');
  };

  const handleSignUp = () => {
    console.log('Sign Up clicked');
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm mx-auto">
      <Button 
        onClick={handleSignIn}
        variant="primary"
        className="flex-1"
      >
        Sign In
      </Button>
      <Button 
        onClick={handleSignUp}
        variant="primary"
        className="flex-1"
      >
        Sign Up
      </Button>
    </div>
  );
};

export default AuthButtons;
