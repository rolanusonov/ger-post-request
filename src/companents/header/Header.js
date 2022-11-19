import React from 'react';
import logo from "../assets/img/Лого.svg"
import "./header.css"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <Link to="/">
                        <img src={logo} alt=""/>

                    </Link>
                    <Link to="/product">
                        <h1 className="product">Users</h1>
                    </Link>
                    <Link to="/basket">
                        <h1 className="product">basket</h1>
                    </Link>

                    <Link to='/user'>
                        <button className="headerBtn">Добавить</button>
                    </Link>


                </div>
            </div>
        </header>
    );
};

export default Header;