import React, { useContext, useState } from 'react';
import logo from '../../images/pathshala1.jpg';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link, Router } from 'react-router-dom';
import { cartValue } from '../../App';

const Header = () => {
    
    const [value, setValue] = useContext(cartValue);
    return (
        <div className="header">
            <img src={logo} alt="" />
           
            <nav className="navbar">
                <div className="anchor">
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    {/* <a href="/about">About</a> */}
                    <Link to="/all_classes">All_Classes</Link>
                    <Link to="/my_classes">My_Classes</Link>
                    
                </div>
                <div className="navIcon">
                    <div>
                    <Link to="/cart"><FontAwesomeIcon id="icon" icon={faCartShopping}></FontAwesomeIcon></Link>
                        
                    </div>
                    <div>
                        <p>: {value}</p>
                    </div>

                </div>


            </nav>
          
        </div>
    );
};

export default Header;