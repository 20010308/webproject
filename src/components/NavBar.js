import React from 'react';
import {Link, useLocation} from "react-router-dom";

const NavBar = () => {
    const location = useLocation();

    return (
        <div className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">Logo</Link>

                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/hooks" className={`nav-link ${location.pathname === '/hooks' ? 'active' : ''}`}>Hooks</Link></li>
                    <li className="nav-item"><Link to="/lifecycle" className={`nav-link ${location.pathname === '/lifecycle' ? 'active' : ''}`}>Lifecycle</Link></li>
                    <li className="nav-item"><Link to="/trello" className={`nav-link ${location.pathname === '/trello' ? 'active' : ''}`}>Trello</Link></li>
                    <li className="nav-item"><Link to="/posts" className={`nav-link ${location.pathname === '/posts' ? 'active' : ''}`}>Yangiliklar</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;