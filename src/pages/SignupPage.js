import React from 'react';
import SignupForm from '../components/SignupForm';

const SignupPage = ({ setProfile }) => {
  return (
    <div className="signup-page">
      <SignupForm setProfile={setProfile} />
    </div>
  );
};

export default SignupPage;
