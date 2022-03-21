import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Articles from '../pages/Articles';
import Login from '../pages/Login';
import Profile from '../pages/Profile';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Articles />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </main>
  );
}
