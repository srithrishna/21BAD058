import React from 'react';

const ProfileDetails = ({ profile }) => {
  return (
    <div className="profile-details">
      <h2>Profile Details</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Phone:</strong> {profile.phone}</p>
      <p><strong>Address:</strong> {profile.address}</p>
    </div>
  );
};

export default ProfileDetails;
