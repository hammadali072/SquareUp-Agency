import React from 'react';

import './contactSec.scss';

const ContactForm = () => {
    return (
        <form className='col_contact_inr'>
            <div className='input_main'>
                <div className='input_otr'>
                    <label className='input_label heading-lm' for='name'>Full Name</label>
                    <input className='input heading-s' type='name' id='name' name='name' placeholder='Type Here' required />
                </div>
                <div className='input_otr'>
                    <label className='input_label heading-lm' for='email'>Email</label>
                    <input className='input heading-s' type='email' id='email' name='email' placeholder='Type Here' required />
                </div>
            </div>
            <div className='selection_otr'>
                <p className='selection_heading heading-lm'>Why are you contacting us?</p>
                <ul className='selection_ul'>
                    <li className='selection_li'>
                        <input className='checkbox' type="checkbox" name="my-checkbox" id="opt-in" />
                        <label className='selection_li_text heading-s' for="opt-in">Web Design</label>
                    </li>
                    <li className='selection_li'>
                        <input className='checkbox' type="checkbox" name="my-checkbox" id="opt-in" />
                        <label className='selection_li_text heading-s' for="opt-in">Collaboration</label>
                    </li>
                    <li className='selection_li'>
                        <input className='checkbox' type="checkbox" name="my-checkbox" id="opt-in" />
                        <label className='selection_li_text heading-s' for="opt-in">Mobile App Design</label>
                    </li>
                    <li className='selection_li'>
                        <input className='checkbox' type="checkbox" name="my-checkbox" id="opt-in" />
                        <label className='selection_li_text heading-s' for="opt-in">Others</label>
                    </li>
                </ul>
            </div>
            <div className='message_main'>
                <div className='message_inr'>
                    <label className='message_label heading-lm' for='message'>Your Message</label>
                    <textarea className='textarea heading-s' type='text' id='message' placeholder='Type Here' />
                </div>
            </div>
            <div className='action_otr'>
                <input className='submit_btn primary_btn' type='submit' value='Submit' />
            </div>
        </form>
    );
}

export default ContactForm;
