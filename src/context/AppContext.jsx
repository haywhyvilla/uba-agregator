"use client"

import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { NULL } from 'sass';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null)
  const [status, setStatus] = useState(null)

  const login = async (values) => {
    // Implement your login logic using axios or any other method
    try {
      // Your login API call here
      const response = await axios.post('https://382a-129-205-113-182.ngrok-free.app/auth', values);
      setUser(response.data);
      setToken(response.data.token)
      setStatus(response.data.status.type)
      console.log(response.data.status.type)
      if(response.data.status.type == "SUCC"){
        router.push("/dashboard");
    } else {
        setError('Login failed. Please check your credentials and try again.');
    }
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error);
      throw error; // Rethrow the error to handle it in the component
    }
  };

  const logout = () => {
    // Implement your logout logic
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, token, status }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);