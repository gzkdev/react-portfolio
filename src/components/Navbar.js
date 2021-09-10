import { useState } from "react"
import { Link } from "react-router-dom";
import SideBarMenu from "./SideBarMenu"

function Navbar() {
    const [menu, setMenu] = useState("header-nav");
    const [toggleState, setToggleState] = useState('header-menu-toggle')

    function toggleMenu() {
        if (menu === "header-nav") {
            setMenu('header-nav open')
            setToggleState('header-menu-toggle active')
            return
        }
        setMenu('header-nav');
        setToggleState('header-menu-toggle')
    }

    return (
        <header className="header">
            <div className="header-ctn ctn">
                <div className="header-logo">ezihe <br />godswill</div>
                <nav className="header-nav-desktop">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className={toggleState} onClick={toggleMenu}></div>
                <SideBarMenu toggleMenu={toggleMenu} menuState={menu}></SideBarMenu>
            </div>
        </header>
    )
}

export default Navbar
