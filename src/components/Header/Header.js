import React from 'react';

import AddIcon from 'assets/add.svg';

import {
    Link 
} from 'react-router-dom';

import './Header.scss';

const Header = () => (
    <header className="header">
        <div className="container header__container">
            <Link to="/" className="header__title">
                <h1>Crud App</h1>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link className="header__link" to="/add">
                            <div className="header__icon">
                                <img src={AddIcon} alt="Add task"/>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
  </header>
);
  

export default Header;
