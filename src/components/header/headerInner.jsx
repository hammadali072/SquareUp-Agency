import React from 'react';
import './header.scss';

function HeaderInner(props) {
    return (
        <div className='HeaderInner'>
            <div className='header_wrapper'>
                <h2 className='heading heading-h2'>{props.WrapperHeading}</h2>
                <p className='desc heading-s'>{props.WrapperDescription}</p>
                <img className='wrapper_bg' src={props.WrapperBackground} alt='bg' />
            </div>
        </div>
    )
}

export default HeaderInner
