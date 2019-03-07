import React from 'react';
import logo from '../images/HSname1.gif';

const AppNav = () => {
    return (
        <div>
            <div id="loginArea" className="">
                <div id="headerLogo">
                    <img id="imageLogo" src={logo} alt="Logo"/>
                </div>
                <div id="buttonContainer" className="row">
                    <div id="subscDiv" className="col-md-6">
                        <div id="registerB" className="btn btn-success">SUBSCRIBE</div>
                    </div>
                    <div id="loginDiv" className="col-md-6">
                        <div id="loginB" className="btn btn-success">LOG IN</div>
                    </div>
                </div>
            </div>
            <div id="navArea">
                <nav className="navbar navbar-expand-lg navbar-light">
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">HOW IT WORKS<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">OUR STASHES</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            STORE
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">BONGS</a>
                            <a className="dropdown-item" href="#">PIPES</a>
                            <a className="dropdown-item" href="#">PAPERS</a>
                            <a className="dropdown-item" href="#">LIGHTS</a>
                            <a className="dropdown-item" href="#">GRINDERS</a>
                            <a className="dropdown-item" href="#">GEAR</a>
                            <a className="dropdown-item" href="#">EDIBLES</a>
                            <a className="dropdown-item" href="#">ALL</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">FAQ</a>
                        </li>
                        
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default AppNav;