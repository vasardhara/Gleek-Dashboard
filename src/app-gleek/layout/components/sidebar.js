import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <React.Fragment>
            <div className="g_left-sidebar">
                {/* Sidebar Logo */}
                <div className="g_left-sidebar-header">
                    <Link to="/" className="g_flex">
                        <img src='assets/logo/logo.png' alt="logo" />
                    </Link>
                    <Link to="/" className="g_ib">
                        <i className="ri-tools-fill"></i>
                    </Link>
                </div>

                {/* Sidebar All Link */}
                <ul className="g_left-sidebar-menubar">
                    <label className='g_flex'>Navigations</label>
                    <li className="g_menu">
                        <NavLink className="g_flex" to="/"><i className="ri-dashboard-fill"></i>Dashboards</NavLink>
                    </li>
                    <li className="g_menu">
                        <NavLink className="g_flex" to="/layouts"><i className="ri-layout-6-fill"></i>Layouts</NavLink>
                    </li>
                    <li className="g_menu">
                        <NavLink className="g_flex" to="/mailbox"><i className="ri-mail-fill"></i>Mailbox</NavLink>
                    </li>
                    <li className="g_menu">
                        <NavLink className="g_flex" to="/ecommerce"><i className="ri-shopping-cart-2-fill"></i>Ecommerce</NavLink>
                    </li>
                    <label className='g_flex'>Apps</label>
                    <li className="g_menu">
                        <NavLink className="g_flex" to="/calendar"><i className="ri-calendar-2-line"></i>Calendar</NavLink>
                    </li>
                    <li className="g_menu">
                        <NavLink className="g_flex" to="/messanger"><i className="ri-messenger-fill"></i>Messanger</NavLink>
                    </li>
                    <li className="g_menu">
                        <NavLink className="g_flex" to="/contacts"><i className="ri-contacts-book-2-fill"></i>Contacts</NavLink>
                    </li>
                    <li className="g_menu">
                        <NavLink className="g_flex" to="/file-manager"><i className="ri-folder-2-fill"></i>File Manager</NavLink>
                    </li>
                    <li className="g_menu">
                        <NavLink className="g_flex" to="/to-do"><i className="ri-todo-fill"></i>To-Do</NavLink>
                    </li>
                    <li className="g_menu">
                        <NavLink className="g_flex" to="/news-feed"><i className="ri-newspaper-fill"></i>News Feed</NavLink>
                    </li>
                    <label className='g_flex'>User Interface</label>
                    <li className="g_menu">
                        <NavLink className="g_flex" to="/elements"><i className="ri-coupon-4-fill"></i>Elements</NavLink>
                    </li>
                    <li className="g_menu">
                        <NavLink className="g_flex" to="/typography"><i className="ri-font-size"></i>Typography</NavLink>
                    </li>
                    <li className="g_menu">
                        <NavLink className="g_flex" to="/icons"><i className="ri-folder-open-fill"></i>Icons</NavLink>
                    </li>
                    <li className="g_menu">
                        <NavLink className="g_flex" to="/tables"><i className="ri-table-line"></i>Tables</NavLink>
                    </li>
                    <li className="g_menu">
                        <NavLink className="g_flex" to="/"> <i className="ri-shut-down-line"></i>Logout</NavLink>
                    </li>
                </ul>
                
            </div>
        </React.Fragment>
    )
}

export default Sidebar