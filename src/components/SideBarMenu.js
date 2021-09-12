import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { routeLinks } from '../RoutePaths'

function SideBarMenu({ menuState, toggleMenu }) {
    return (
        <nav className={menuState}>
            <ul className="header-nav-list">
                <li>
                    MENU
                </li>
                {routeLinks.map((item, index) => (
                    <motion.li
                        whileHover={{ scale: 1.2, originX: 0 }}
                        transition={{ type: "spring" }}
                        key={index}
                    ><Link onClick={toggleMenu} to={item.path}>{item.text}</Link></motion.li>
                ))}
            </ul>
        </nav >
    )
}

export default SideBarMenu
