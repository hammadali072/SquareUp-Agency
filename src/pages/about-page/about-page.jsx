import React from 'react'
import HeaderInner from '../../components/header/headerInner'
import AboutContactSec from '../../components/aboutContactSec/aboutContactSec'
import ProcessCart from '../process-page/processCart'
import { AboutUsPageData } from '../../Data'
import './about-page.scss'

import img from '../../assets/about-page-img.webp'
import bg from '../../assets/service-section-wrapper-bg.webp'

const AboutPage = () => {
    return (
        <div className='AboutUsPage'>
            <div className='container_fluid'>
                <HeaderInner
                    WrapperHeading='About Us'
                    WrapperDescription='Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation.'
                    WrapperBackground={bg}
                />
                <div className='about_container_main'>
                    <div className='row about_container_row_custom'>
                        <div className='col-lg-6 col_content_otr'>
                            <div className='col_content_inr'>
                                <h2 className='heading heading-h2'>About SquareUp</h2>
                                <p className='desc heading-m'>
                                    SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-6 col_img_otr'>
                            <div className='col_img_inr'>
                                <img className='img' src={img} alt='img' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='story_main'>
                    <div className='story_wrapper'>
                        <h2 className='heading heading-h2'>Our Story</h2>
                    </div>
                    <div className='row row_custom'>
                        {AboutUsPageData.map((data) => {
                            return (
                                <ProcessCart
                                    key={data.id}
                                    processCartClass='col-lg-6 col-md-6'
                                    processCartNumber={data.processCartNumber}
                                    ProcessCartHeading={data.ProcessCartHeading}
                                    ProcessCartDescription={data.ProcessCartDescription}
                                />
                            )
                        })}
                    </div>
                </div>
                <AboutContactSec />
            </div>
        </div>
    )
}

export default AboutPage
