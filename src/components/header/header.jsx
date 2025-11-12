import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import ThemeBtn from '../ThemeBtn/ThemeBtn'
import './header.scss';

import brandLogo from '../../assets/brand-logo.webp'
import menuIcon from '../../assets/menu-icon.svg'
import { X } from '@phosphor-icons/react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const showSidebarMenu = () => setIsOpen(!isOpen);
    const closeSidebarMenu = () => setIsOpen(false);

    return (
        <Fragment>
            <div className={`overlay_main ${isOpen && "showSidebar"}`}>
                <div className='overlay_inr'>
                    <div className="logo_main">
                        <Link className="logo_otr" to='/'>
                            <img className="logo" src={brandLogo} alt="Brand LOGO" />
                        </Link>
                        <div className="close_icon_otr" onClick={closeSidebarMenu}>
                            <X size={24} />
                        </div>
                    </div>
                    <nav className="nav_otr">
                        <ul className="menu_ul">
                            <li className="menu_li">
                                <Link className="menu_link heading-sm" to='/'>
                                    Home
                                </Link>
                            </li>
                            <li className="menu_li">
                                <Link className="menu_link heading-sm" to='/service'>
                                    Services
                                </Link>
                            </li>
                            <li className="menu_li">
                                <Link className="menu_link heading-sm" to='/work'>
                                    Work
                                </Link>
                            </li>
                            <li className="menu_li">
                                <Link className="menu_link heading-sm" to='/process'>
                                    Process
                                </Link>
                            </li>
                            <li className="menu_li">
                                <Link className="menu_link heading-sm" to='/about'>
                                    About
                                </Link>
                            </li>
                            <li className="menu_li">
                                <Link className="menu_link heading-sm" to='/career'>
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className='action_otr'>
                        <Link className='action_inr' to='/contact'>
                            <ThemeBtn
                                ButtonClass='contact_btn primary_btn'
                                ButtonText='Contact Us'
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <header className="header">
                <div className="container_fluid">
                    <div className="header_inr">
                        <div className="logo_main">
                            <Link className="logo_otr" to='/'>
                                <img className="logo" src={brandLogo} alt="Brand LOGO" />
                            </Link>
                            <div className="menu_icon_otr" onClick={showSidebarMenu} >
                                <img className='icon' src={menuIcon} alt='Menu Icon' />
                            </div>
                        </div>
                        <nav className="nav_otr">
                            <ul className="menu_ul">
                                <li className="menu_li">
                                    <Link className="menu_link heading-sm" to='/'>
                                        Home
                                    </Link>
                                </li>
                                <li className="menu_li">
                                    <Link className="menu_link heading-sm" to='/service'>
                                        Services
                                    </Link>
                                </li>
                                <li className="menu_li">
                                    <Link className="menu_link heading-sm" to='/work'>
                                        Work
                                    </Link>
                                </li>
                                <li className="menu_li">
                                    <Link className="menu_link heading-sm" to='/process'>
                                        Process
                                    </Link>
                                </li>
                                <li className="menu_li">
                                    <Link className="menu_link heading-sm" to='/about'>
                                        About
                                    </Link>
                                </li>
                                <li className="menu_li">
                                    <Link className="menu_link heading-sm" to='/career'>
                                        Careers
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className='action_otr'>
                            <Link className='action_inr' to='/contact'>
                                <ThemeBtn
                                    ButtonClass='contact_btn primary_btn'
                                    ButtonText='Contact Us'
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default Header
