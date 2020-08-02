import React from 'react';

const Sidebar = (props) => {

    const {openSideBar} = props;

    // const openMenu = () => {
    //     document.querySelector('.sidebar').classList.add('open');
    // }

    const closeMenu = () => {
        document.querySelector('.sidebar').classList.remove('open');
        props.setOpenSideBar(false);
    }

    return (

        <div>
            <aside className={`sidebar ${openSideBar?'open':''}`}>
                <h3>Shopping Categories</h3>
                <button onClick={closeMenu} className="sidebar-close-button">x</button>
                <ul>
                <li><a href="/">Pants</a></li>
                <li><a href="/">Shirts</a></li>
                </ul>

            </aside>
        </div>
    )
}

export default Sidebar;
