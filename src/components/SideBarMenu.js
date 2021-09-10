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
                    <li key={index}><Link onClick={toggleMenu} to={item.path}>{item.text}</Link></li>
                ))}
            </ul>
        </nav>
    )
}

export default SideBarMenu
