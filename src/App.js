import React, { Component } from 'react';
import './App.css';
import Profile from './profile.js';
import Guide from './guide.js';

const route = () => {
  const pathname = window.location.pathname;

  if(pathname.startsWith('/guide')){
    return Guide
  }
  else{
    return Profile
  }
}

export default route();
