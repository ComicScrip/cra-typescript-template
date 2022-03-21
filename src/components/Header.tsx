import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to={'/'}>Articles</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/profile'}>Profile</Link>
      </nav>
    </header>
  );
}
