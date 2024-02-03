import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg  text-uppercase navbar-dark ">
                <div className="container">
                    <Link className="navbar-brand fs-2 fw-bolder" to="">START FRAMEWORK</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse fs-5" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-6 fw-bold">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="About">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="Portfolio">PORTFOLIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="Contact">CONTACT</Link>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
