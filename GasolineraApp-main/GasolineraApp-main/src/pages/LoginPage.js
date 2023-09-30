import React from 'react';
import {
  LoginContainer,
  LoginForm,
  LoginTitle,
  LoginInput,
  LoginButton,
} from '../Styles/LoginPageStyles.js';

const LoginPage = () => {
  // Obtiene el historial de navegación
  const handleLogin = () => {
    // Cambia la ruta a "/home"
    window.location.href = '/home';
  };

  return (
    <LoginContainer>
      <LoginForm>
        <LoginTitle>Login Page</LoginTitle>
        <label htmlFor="username">Username:</label>
        <LoginInput type="text" id="username" />
        <label htmlFor="password">Password:</label>
        <LoginInput type="password" id="password" />
        <LoginButton type="button" onClick={handleLogin}>Login</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;
