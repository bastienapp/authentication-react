import axios from 'axios';
import React, { useState } from 'react';
import FormInput from '../../commons/FormInput';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import './SignUpView.css';

function SignUpView() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/auth/signup`, user)
      .then((response) => {
        alert(JSON.stringify(response));
      })
      .catch((error) => alert(JSON.stringify(error)));
  };

  return (
    <MainLayout className="SignUpView">
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={user}
          setValue={setUser}
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          value={user}
          setValue={setUser}
        />
        <FormInput
          label="Prénom"
          name="firstname"
          type="text"
          value={user}
          setValue={setUser}
        />
        <FormInput
          label="Nom"
          name="lastname"
          type="text"
          value={user}
          setValue={setUser}
        />
        <input type="submit" value="Envoyer" />
      </form>
    </MainLayout>
  );
}

export default SignUpView;
