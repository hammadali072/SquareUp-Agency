import React from 'react';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

import './contactSec.scss';

function ContactWrapper(props) {
    return (
        <div className='wrapper'>
            <div className='wrapper_inr'>
                <div className='logo_otr'>
                    <img className='logo' src={props.ContactWrapper_logo} alt='logo' />
                </div>
                <h2 className='heading heading-h2'>{props.ContactWrapper_Heading}</h2>
                <p className='desc heading-s'>{props.ContactWrapper_Description}</p>
                <div className='action_otr'>
                    <ThemeBtn
                        ButtonClass='primary_btn'
                        ButtonText='Start Project'
                    />
                </div>
            </div>
        </div>
    );
}

export default ContactWrapper;
