import React from 'react'
import './header.scss'

function HeaderWrapper(props) {
    return (
        <div className='lower_header_wrapper'>
            <h2 className='header_wrapper_heading heading-h2'>{props.HeaderWrapperTitle}</h2>
            <p className='header_wrapper_desc heading-s'>{props.HeaderWrapperDescription}</p>
            <div className='header_wrapper_action_otr'>
                <p className='header_wrapper_action_text heading-l'>{props.HeaderWrapperButtonText}</p>
            </div>
        </div>
    )
}

export default HeaderWrapper
