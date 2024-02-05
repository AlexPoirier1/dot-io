import { useState } from 'react'

import './Menu.css'

interface MenuProps {}

export function Menu({}: Readonly<MenuProps>) {
    const [menuOpen, setMenuOpen] = useState(false)

    return menuOpen ? (
        <div className={`menu ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}>
            <div className="height-bar left"></div>
            <div className="width-bar top"></div>
            <div className="height-bar right"></div>
            <div className="width-bar bottom"></div>
        </div>
    ) : (
        <div className="menu-handle" onClick={() => setMenuOpen(true)}>
            <div className="bar top-bar"></div>
            <div className="bar mid-bar"></div>
            <div className="bar bottom-bar"></div>
        </div>
    )
}
