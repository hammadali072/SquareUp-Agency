import React from 'react'
import HeaderInner from '../../components/header/headerInner'
import HeaderWrapper from '../../components/header/headerWrapper'
import DigitalWorldSec from '../../components/digitalWorldSec/digitalWorldSec'
import ServicesPageCart from './ServicesPageCart'
import {
    ServicesPageDesignUXData, ServicesPageDesignUIData,
    EngineeringWebDevelopmentData, EngineeringMobileAppDevelopmentData,
    ServicesPageDesignBrandingData, EngineeringSoftwareDevelopmentData,
    ServicesPageProjectPlanningData, ServicesPageProjectAngileDevelopmentData,
    ServicesPageProjectAssuranceAndTestingData
} from '../../Data'
import './services-page.scss'

import bg from '../../assets/service-section-wrapper-bg.webp'
const ServicesPage = () => {
    return (
        <div className='ServicesPage'>
            <div className='container_fluid'>
                <HeaderInner
                    WrapperHeading='Our Services'
                    WrapperDescription="Transform your brand with our innovative digital solutions that captivate and engage your audience."
                    WrapperBackground={bg}
                />
                <div className='design_section'>
                    <HeaderWrapper
                        HeaderWrapperTitle="Design"
                        HeaderWrapperDescription="At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences. "
                        HeaderWrapperButtonText="Our design services include:"
                    />
                    <div className='design_section_otr'>
                        <div className='design_section_inr design_section_1'>
                            <div className='design_section_wrapper'>
                                <h5 className='design_wrapper_heading heading-h5'>User Experience (UX) Design</h5>
                            </div>
                            <div className='row row_custom'>
                                {ServicesPageDesignUXData.map((data) => {
                                    return (
                                        <ServicesPageCart
                                            key={data.id}
                                            ServicePageCartClass='col-lg-3 col-md-6 col-sm-6'
                                            ServicePageCartIcon={data.ServicePageCartIcon}
                                            ServicesPageCartHeading={data.ServicesPageCartHeading}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='design_section_otr'>
                        <div className='design_section_inr design_section_1'>
                            <div className='design_section_wrapper'>
                                <h5 className='design_wrapper_heading heading-h5'>User Interface (UI) Design</h5>
                            </div>
                            <div className='row row_custom'>
                                {ServicesPageDesignUIData.map((data) => {
                                    return (
                                        <ServicesPageCart
                                            key={data.id}
                                            ServicePageCartClass='col-lg-3 col-md-6 col-sm-6'
                                            ServicePageCartIcon={data.ServicePageCartIcon}
                                            ServicesPageCartHeading={data.ServicesPageCartHeading}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='design_section_otr'>
                        <div className='design_section_inr design_section_1'>
                            <div className='design_section_wrapper'>
                                <h5 className='design_wrapper_heading heading-h5'>Branding and Identity</h5>
                            </div>
                            <div className='row row_custom'>
                                {ServicesPageDesignBrandingData.map((data) => {
                                    return (
                                        <ServicesPageCart
                                            key={data.id}
                                            ServicePageCartClass='col-lg-3 col-md-6 col-sm-6'
                                            ServicePageCartIcon={data.ServicePageCartIcon}
                                            ServicesPageCartHeading={data.ServicesPageCartHeading}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='design_section'>
                    <HeaderWrapper
                        HeaderWrapperTitle="Engineering"
                        HeaderWrapperDescription="Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs."
                        HeaderWrapperButtonText="Our engineering services include:"
                    />
                    <div className='design_section_otr'>
                        <div className='design_section_inr design_section_1'>
                            <div className='design_section_wrapper'>
                                <h5 className='design_wrapper_heading heading-h5'>Web Development</h5>
                            </div>
                            <div className='row row_custom'>
                                {EngineeringWebDevelopmentData.map((data) => {
                                    return (
                                        <ServicesPageCart
                                            key={data.id}
                                            ServicePageCartClass='col-lg-3 col-md-6 col-sm-6'
                                            ServicePageCartIcon={data.ServicePageCartIcon}
                                            ServicesPageCartHeading={data.ServicesPageCartHeading}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='design_section_otr'>
                        <div className='design_section_inr design_section_1'>
                            <div className='design_section_wrapper'>
                                <h5 className='design_wrapper_heading heading-h5'>Mobile App Development</h5>
                            </div>
                            <div className='row row_custom'>
                                {EngineeringMobileAppDevelopmentData.map((data) => {
                                    return (
                                        <ServicesPageCart
                                            key={data.id}
                                            ServicePageCartClass='col-lg-3 col-md-6 col-sm-6'
                                            ServicePageCartIcon={data.ServicePageCartIcon}
                                            ServicesPageCartHeading={data.ServicesPageCartHeading}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='design_section_otr'>
                        <div className='design_section_inr design_section_1'>
                            <div className='design_section_wrapper'>
                                <h5 className='design_wrapper_heading heading-h5'>Custom Software Development</h5>
                            </div>
                            <div className='row row_custom'>
                                {EngineeringSoftwareDevelopmentData.map((data) => {
                                    return (
                                        <ServicesPageCart
                                            key={data.id}
                                            ServicePageCartClass='col-lg-3 col-md-6 col-sm-6'
                                            ServicePageCartIcon={data.ServicePageCartIcon}
                                            ServicesPageCartHeading={data.ServicesPageCartHeading}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='design_section'>
                    <HeaderWrapper
                        HeaderWrapperTitle="Project Management"
                        HeaderWrapperDescription="Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process."
                        HeaderWrapperButtonText="Our project management services include:"
                    />
                    <div className='design_section_otr'>
                        <div className='design_section_inr design_section_1'>
                            <div className='design_section_wrapper'>
                                <h5 className='design_wrapper_heading heading-h5'>Project Planning and Scoping</h5>
                            </div>
                            <div className='row row_custom'>
                                {ServicesPageProjectPlanningData.map((data) => {
                                    return (
                                        <ServicesPageCart
                                            key={data.id}
                                            ServicePageCartClass='col-lg-3 col-md-6 col-sm-6'
                                            ServicePageCartIcon={data.ServicePageCartIcon}
                                            ServicesPageCartHeading={data.ServicesPageCartHeading}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='design_section_otr'>
                        <div className='design_section_inr design_section_1'>
                            <div className='design_section_wrapper'>
                                <h5 className='design_wrapper_heading heading-h5'>Agile Development</h5>
                            </div>
                            <div className='row row_custom'>
                                {ServicesPageProjectAngileDevelopmentData.map((data) => {
                                    return (
                                        <ServicesPageCart
                                            key={data.id}
                                            ServicePageCartClass='col-lg-3 col-md-6 col-sm-6'
                                            ServicePageCartIcon={data.ServicePageCartIcon}
                                            ServicesPageCartHeading={data.ServicesPageCartHeading}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='design_section_otr'>
                        <div className='design_section_inr design_section_1'>
                            <div className='design_section_wrapper'>
                                <h5 className='design_wrapper_heading heading-h5'>Quality Assurance and Testing</h5>
                            </div>
                            <div className='row row_custom'>
                                {ServicesPageProjectAssuranceAndTestingData.map((data) => {
                                    return (
                                        <ServicesPageCart
                                            key={data.id}
                                            ServicePageCartClass='col-lg-3 col-md-6 col-sm-6'
                                            ServicePageCartIcon={data.ServicePageCartIcon}
                                            ServicesPageCartHeading={data.ServicesPageCartHeading}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <DigitalWorldSec />
            </div>
        </div>
    )
}

export default ServicesPage
