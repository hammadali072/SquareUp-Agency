import React from 'react'
import HeaderInner from '../header/headerInner';
import Accordion from 'react-bootstrap/Accordion';
import FAQCart from './FAQCart';
import { FaqData } from '../../Data';
import './faqSec.scss'

import bg from '../../assets/service-section-wrapper-bg.webp'

const FAQSec = () => {
    return (
        <section className='FAQSection'>
            <div className='container_fluid'>
                <HeaderInner
                    WrapperHeading='Frequently Asked Questions'
                    WrapperDescription='Still you have any questions? Contact our Team via hello@squareup.com'
                    WrapperBackground={bg}
                />
                <div className='row row_custom'>
                    <div className='col-lg-8 col-md-10 col_FAQ'>
                        {FaqData.map((data) => {
                            return (
                                <Accordion defaultActiveKey="0" key={data.id}>
                                    <FAQCart
                                        KeyNum={data.KeyNum}
                                        FaqCartNumber={data.FaqCartNumber}
                                        FaqCartHeading={data.FaqCartHeading}
                                        FAQCartDesc={data.FAQCartDesc}
                                    />
                                </Accordion>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQSec
