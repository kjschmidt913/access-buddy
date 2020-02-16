import React from 'react';
import { Link } from 'react-router-dom';


function Nav(props) {
    if (props.account === "True") {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
                <Link className="navbar-brand" to="/">
                    <h3>AccessBuddy <i className="fas fa-unlock"></i></h3>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse ml-3" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">Home</Link>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">About</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">Contact</span>
                        </li>
                    </ul>
                </div>
            </nav>

        );

    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
            <Link className="navbar-brand" to="/">
                <h3>AccessBuddy <i className="fas fa-unlock"></i></h3>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse ml-3" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <span className="nav-link" >Features</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link">Pricing</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link">About</span>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default Nav;