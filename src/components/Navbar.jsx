import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light" style={{padding: '0 20%'}}>
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">
                    My Login Forms
                </Link>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                    <li className="nav-item me-5">
                    <Link className="nav-link active color" aria-current="page" to="/">
                        Validation Login Form 
                    </Link>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link active color" to="/about">
                        Alert Login Form
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

    </>
  );
}
