import React from 'react';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import { Link } from 'react-router-dom';
import './serviceSec.scss';

function ServiceCart(props) {
    return (
        <div className={`col_serviceCart_box_otr ${props.ServiceCartClass}`}>
            <div className='col_serviceCart_box_inr'>
                <div className='icon_main'>
                    <div className='icon_otr'>
                        <img className='icon' src={props.ServiceCartIcon} alt='Icon' />
                    </div>
                    <Link className='responsive_heading heading-h4'>{props.ServiceHeading}</Link>
                </div>
                <Link className='heading heading-h4'>{props.ServiceHeading}</Link>
                <p className='desc heading-s'>{props.ServiceDescription}</p>
                <div className='action_otr'>
                    <ThemeBtn
                        ButtonClass='learn_btn Secondary_btn'
                        ButtonText='Learn More'
                    />
                </div>
            </div>
        </div>
    )
}

export default ServiceCart
