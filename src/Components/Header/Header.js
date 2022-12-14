import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark shadow-lg" style={{background : "#031430"}}>
            <div className="container">
                <Link className="navbar-brand fw-bold fs-4" to="/">My Schedule</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/todo">Todo</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/calendar">Calender</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>


                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;