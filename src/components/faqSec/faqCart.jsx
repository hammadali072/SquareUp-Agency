import React from 'react';

import { Accordion } from 'react-bootstrap';
import { Plus } from '@phosphor-icons/react';

import './faqSec.scss';

function FAQCart(props) {
    return (
        <div className='col_FaqCart_otr'>
            <div className='col_FaqCart_inr'>
                <Accordion.Item className='Accordion_item' eventKey={props.KeyNum}>
                    <div className='num_otr'>
                        <p className='num heading-h5'>{props.FaqCartNumber}</p>
                    </div>
                    <div className='Accordion_header_body'>
                        <Accordion.Header>{props.FaqCartHeading} <Plus size={24} /></Accordion.Header>
                        <Accordion.Body>
                            {props.FAQCartDesc}
                        </Accordion.Body>
                    </div>
                </Accordion.Item>
            </div>
        </div>
    )
}

export default FAQCart
