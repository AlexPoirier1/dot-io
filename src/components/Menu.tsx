import { useState } from 'react'

import './Menu.css'

interface MenuProps {}

export function Menu({}: Readonly<MenuProps>) {
    const [menuOpen, setMenuOpen] = useState(false)

    // DEV AP: Add overlay to close menu
    return menuOpen ? (
        <div className={`menu ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}></div>
    ) : (
        <div className="menu-handle" onClick={() => setMenuOpen(true)}>
            <div className="bar top-bar"></div>
            <div className="bar mid-bar"></div>
            <div className="bar bottom-bar"></div>
        </div>
    )
}
