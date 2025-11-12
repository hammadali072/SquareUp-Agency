import React from 'react';
import { Link } from 'react-router-dom';
import './chooseUsSec.scss';

function ChooseUsCart(props) {
    return (
        <div className={`col_chooseUs_box_otr ${props.ChooseUsClass}`}>
            <div className='col_chooseUs_box_inr'>
                <div className='icon_main'>
                    <div className='icon_otr'>
                        <img className='icon' src={props.ChooseUsCartIcon} alt='icon' />
                    </div>
                    <Link className='heading heading-h5'>{props.ChooseUsCartHeading}</Link>
                </div>
                <p className='desc heading-s'>{props.ChooseUsCartDescription}</p>
            </div>
        </div>
    )
}

export default ChooseUsCart
