import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss';

import brandLogo from '../../assets/brand-logo.webp';
import mailIcon from '../../assets/mail-icon.webp'
import phoneIcon from '../../assets/phone-icon.webp'
import mapIcon from '../../assets/map-icon.webp'
import facebookIcon from '../../assets/facebook-icon.webp'
import twitterIcon from '../../assets/twitter-icon.webp'
import linkedinIcon from '../../assets/linkedin-icon.webp'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container_fluid'>
                <div className='footer_top'>
                    <div className='logo_main'>
                        <Link className='logo_otr'>
                            <img className='logo' src={brandLogo} alt='Brand LOGO' />
                        </Link>
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
                        <div className='social_otr'>
                            <p className='social_heading heading-mm'>Stay Connected</p>
                            <ul className='social_ul'>
                                <li className='social_li'>
                                    <a className='social_a' href='/'>
                                        <img className='social_icon' src={facebookIcon} alt='Facebook Icon' />
                                    </a>
                                </li>
                                <li className='social_li'>
                                    <a className='social_a' href='/'>
                                        <img className='social_icon' src={twitterIcon} alt='Twitter Icon' />
                                    </a>
                                </li>
                                <li className='social_li'>
                                    <a className='social_a' href='/'>
                                        <img className='social_icon' src={linkedinIcon} alt='LinkedIn Icon' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className='responsive_social_otr'>
                        <p className='social_heading heading-mm'>Stay Connected</p>
                        <ul className='social_ul'>
                            <li className='social_li'>
                                <a className='social_a' href='/'>
                                    <img className='social_icon' src={facebookIcon} alt='Facebook Icon' />
                                </a>
                            </li>
                            <li className='social_li'>
                                <a className='social_a' href='/'>
                                    <img className='social_icon' src={twitterIcon} alt='Twitter Icon' />
                                </a>
                            </li>
                            <li className='social_li'>
                                <a className='social_a' href='/'>
                                    <img className='social_icon' src={linkedinIcon} alt='LinkedIn Icon' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='footer_bottom'>
                    <div className='link_otr'>
                        <ul className='link_ul'>
                            <li className='link_li'>
                                <div className='icon_otr'>
                                    <img className='icon' src={mailIcon} alt='Mail Icon' />
                                </div>
                                <a className='link_a heading-s' href='mailto:hammadali.cse123@gmail.com'>hammadali.cse123@gmail.com</a>
                            </li>
                            <li className='link_li'>
                                <div className='icon_otr'>
                                    <img className='icon' src={phoneIcon} alt='Phone Icon' />
                                </div>
                                <a className='link_a heading-s' href='tel:+923174030299'>0317 4030 299</a>
                            </li>
                            <li className='link_li'>
                                <div className='icon_otr'>
                                    <img className='icon' src={mapIcon} alt='Map Icon' />
                                </div>
                                <p className='link_text heading-s'>Somewhere in the World</p>
                            </li>
                        </ul>
                    </div>
                    <div className='copyright_text_otr'>
                        <p className='copyright_text heading-s'>© 2025 SquareUp. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
