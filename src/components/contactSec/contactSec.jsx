import React from 'react'

import ContactWrapper from './ContactWrapper';
import ContactForm from './ContactForm';

import './contactSec.scss'

import logo from '../../assets/logo.webp'

const ContactSec = () => {
    return (
        <section className='ContactSection'>
            <div className='container_fluid'>
                <ContactWrapper
                    ContactWrapper_logo={logo}
                    ContactWrapper_Heading='Thank you for your Interest in SquareUp.'
                    ContactWrapper_Description='We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.'
                />
                <div className='row row_custom'>
                    <div className='col-lg-8 col_contact_otr'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSec