import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import { Link } from 'react-router-dom';

export default function Header() {

    const [openSideBar, setOpenSideBar] = useState(false);
    

    return (
        <>
            <header className="header">
                <div className="brand">
                <button onClick={ () => setOpenSideBar(!openSideBar)}>
                    &#9776;
                </button>
                <Link to="/">Amazona</Link>
                </div>

                <div className="header-links">
                    <Link to="/cart">Cart</Link>
                    <a href="/">Sign In</a>
                </div>
            </header>

            <Sidebar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
        </>
            
    )
}
