import React from 'react'
import ThemeBtn from '../themeBtn/ThemeBtn'
import './aboutContactSec.scss'

import logo from '../../assets/logo.webp'

const AboutContactSec = () => {
    return (
        <div className='about_contact_sec'>
            <div className='logo_content_otr'>
                <div className='logo_content_inr'>
                    <div className='logo_otr'>
                        <img className='logo' src={logo} alt='LOGO' />
                    </div>
                    <div className='content_otr'>
                        <h4 className='content_heading heading-h4'>Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....</h4>
                        <p className='content_desc heading-s'>
                            Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.
                        </p>
                    </div>
                </div>
            </div>
            <div className='box_otr'>
                <div className='box_inr'>
                    <div className='text_main'>
                        <p className='text heading-s'>Welcome to SquareUp</p>
                        <div className='box_text_otr'>
                            <p className='box_text heading-s'>
                                Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.
                            </p>
                        </div>
                    </div>
                    <div className='action_otr'>
                        <ThemeBtn
                            ButtonClass='project_btn primary_btn'
                            ButtonText='Start Project'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContactSec