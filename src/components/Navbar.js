import { useState } from "react"
import { Link } from "react-router-dom";
import SideBarMenu from "./SideBarMenu"
import { motion } from 'framer-motion'

function Navbar() {
    const NavRoutes = [
        { title: "Home", link: "/" },
        { title: "Projects", link: "/projects" },
        { title: "About", link: "/about" },
        { title: "Contact", link: "/contact" }
    ]
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
                <div className="header-logo">ezihe<br />godswill</div>
                <nav className="header-nav-desktop">
                    <ul>
                        {NavRoutes.map((navItem, index) => (
                            <motion.li key={index}
                                whileHover={{ scale: 1.2 }}
                            ><Link to={navItem.link}>{navItem.title}</Link>
                            </motion.li>
                        ))}
                    </ul>
                </nav>
                <motion.div whileHover={{ scale: 1.2 }} className={toggleState} onClick={toggleMenu}></motion.div>
                <SideBarMenu toggleMenu={toggleMenu} menuState={menu}></SideBarMenu>
            </div>
        </header>
    )
}

export default Navbar
