import React from 'react'
import ThemeBtn from '../themeBtn/themeBtn'
import './digitalWorldSec.scss'

import logo from '../../assets/logo.webp'

const DigitalWorldSec = () => {
    return (
        <div className='digi_world_section'>
            <div className='digi_world_wrapper'>
                <div className='digi_world_logo_main'>
                    <div className='digi_world_logo_otr'>
                        <img className='digi_world_logo' src={logo} alt='LOGO' />
                    </div>
                </div>
                <div className='digi_world_content'>
                    <h3 className='digi_world_heading heading-h3'>Let us Bring your Ideas to Life in the Digital World.</h3>
                    <p className='digi_world_desc heading-s'>
                        No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.
                    </p>
                </div>
                <div className='action_otr'>
                    <ThemeBtn
                        ButtonClass='primary_btn'
                        ButtonText='Start Project'
                    />
                </div>
            </div>
        </div>
    )
}

export default DigitalWorldSec
