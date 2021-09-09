import { Link } from 'react-router-dom'

function SideBarMenu({ menuState }) {
    return (
        <nav className={menuState}>
            <ul className="header-nav-list">
                <li>
                    MENU
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">Projects</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default SideBarMenu
