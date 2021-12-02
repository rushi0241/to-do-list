import Ract from 'react'
import {NavLink} from "react-router-dom";
const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink exact to="/" className="nav-link font-weight-bold" activeClassName="text-danger">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/menu" className="nav-link font-weight-bold" activeClassName="text-danger">Menu</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/weather" className="nav-link font-weight-bold" activeClassName="text-danger">Weather</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
        </>
    )
}
export default NavBar