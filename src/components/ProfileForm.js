import React, { useState } from 'react';

const ProfileForm = ({ setProfile }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(form);
  };

  return (
    <form onSubmit={handleSubmit} className="profile-form">
      <h2>Create Profile</h2>
      <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input type="tel" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
      <textarea name="address" placeholder="Address" value={form.address} onChange={handleChange} required></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProfileForm;
