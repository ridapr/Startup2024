import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Home } from './home/home';
import { Profile } from './profile/profile';
import { Item } from './item/item';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <h1>Project RP</h1>
          <nav className='navbar fixed-top navbar-dark'>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to=''>
                  Login
                </NavLink>
              </li>
              {/* {authState === AuthState.Authenticated && ( */}
                <li className='nav-item'>
                  <NavLink className='nav-link' to='home'>
                    Home
                  </NavLink>
                </li>
              {/* )} */}
              {/* {authState === AuthState.Authenticated && ( */}
                <li className='nav-item'>
                  <NavLink className='nav-link' to='profile'>
                    Profile
                  </NavLink>
                </li>
              {/* )} */}
              <li className='nav-item'>
                <NavLink className='nav-link' to='item'>
                  Item
                </NavLink>
              </li>
            </menu>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/item" element={<Item />} />
        </Routes>

        <footer>
          <hr />
          <span className="text-reset">Created by: Riley</span>
          <br />
          <a href="https://github.com/ridapr/Startup2024">GitHub</a>
        </footer>

      </div>
    </BrowserRouter>
  )
}

export default App
