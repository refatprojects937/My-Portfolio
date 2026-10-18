import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
    return (
        <div className="navbar shadow-sm bg-blue-900 container mx-auto rounded-2xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a href='../home'>Home</a></li>
        <li><a href='../WatchMe'>About</a></li>
        <li><a href='../docs'>Stats</a></li>
       
        <li><a href='../Ideas'>Projects</a></li>
      </ul>
    </div>
    <link href='../../assets/WhatsApp Image 2026-10-18 at 6.18.02 PM.jpeg'></link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-2">
      <li className="btn btn-outline btn-info"><a href='../home'>Home</a></li>
      <li className="btn btn-outline btn-info"><a href='../WatchMe'>About</a></li>
      <li className="btn btn-outline btn-info"><a href='../docs'>Stats</a></li>
       
        <li className="btn btn-outline btn-info"><a href='../Ideas'>Projects</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-success">Resume</a>
  </div>
</div>
    );
};

export default Navbar;