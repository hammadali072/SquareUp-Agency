import React from 'react'
import HeaderInner from '../../components/header/headerInner'
import HeaderWrapper from '../../components/header/headerWrapper'
import AboutContactSec from '../../components/aboutContactSec/aboutContactSec'
import CareerJobCart from './careerJobCart'
import CareerWorkCart from './CareerWorkCart'
import { CareerWorkCartData, CareerDesignJobData, CareerDevelopmentJobData, CareerManagementJobData, CareerQAJobData } from '../../Data'

import './career-page.scss'

import bg from '../../assets/service-section-wrapper-bg.webp'

const CareerPage = () => {
    return (
        <div className='CareerPage'>
            <div className='container_fluid'>
                <HeaderInner
                    WrapperHeading='Join Our Team at SquareUp'
                    WrapperDescription='Unlock your potential and join our team of innovators and problem solvers.'
                    WrapperBackground={bg}
                />
                <div className='CareerWorkSection'>
                    <HeaderWrapper
                        HeaderWrapperTitle="Welcome to SquareUp, where talent meets opportunity!"
                        HeaderWrapperDescription="At SquareUp, we believe that the success of our agency lies in the talent, passion, and dedication of our team members. We are a digital product agency that thrives on innovation, creativity, and collaboration. If you're ready to make a difference and contribute to cutting-edge projects, we invite you to explore career opportunities with us."
                        HeaderWrapperButtonText="Why Work at SquareUp?"
                    />
                    <div className='row row_custom'>
                        {CareerWorkCartData.map((data) => {
                            return (
                                <CareerWorkCart
                                    key={data.id}
                                    CareerWorkCartClass='col-lg-6 col-md-6'
                                    CareerWorkCartHeading={data.CareerWorkCartHeading}
                                    CareerWorkCartDescription={data.CareerWorkCartDescription}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className='OpeningSection'>
                    <div className='opening_section_wrapper'>
                        <h2 className='opening_wrapper_heading heading-h2'>Current Openings</h2>
                        <p className='opening_wrapper_desc heading-s'>
                            We are always on the lookout for talented individuals who are passionate about creating exceptional digital experiences. Whether you're a designer, engineer, project manager, or have skills that align with our agency's mission, we encourage you to explore our open positions.
                        </p>
                    </div>
                    <div className='design_job_section'>
                        <div className='design_job_wrapper'>
                            <h5 className='design_job_wrapper_heading heading-h5'>Design Job Openings</h5>
                        </div>
                        <div className='row design_job_row_custom'>
                            {CareerDesignJobData.map((data) => {
                                return (
                                    <CareerJobCart
                                        key={data.id}
                                        CareerJobCartClass='col-lg-4 col-md-6'
                                        CareerJobCartIcon={data.CareerJobCartIcon}
                                        CareerJobCartHeading={data.CareerJobCartHeading}
                                        CareerJobCartDescription={data.CareerJobCartDescription}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <div className='design_job_section'>
                        <div className='design_job_wrapper'>
                            <h5 className='design_job_wrapper_heading heading-h5'>Development Job Openings</h5>
                        </div>
                        <div className='row design_job_row_custom'>
                            {CareerDevelopmentJobData.map((data) => {
                                return (
                                    <CareerJobCart
                                        key={data.id}
                                        CareerJobCartClass='col-lg-4 col-md-6'
                                        CareerJobCartIcon={data.CareerJobCartIcon}
                                        CareerJobCartHeading={data.CareerJobCartHeading}
                                        CareerJobCartDescription={data.CareerJobCartDescription}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <div className='design_job_section'>
                        <div className='design_job_wrapper'>
                            <h5 className='design_job_wrapper_heading heading-h5'>Management Job Openings</h5>
                        </div>
                        <div className='row design_job_row_custom'>
                            {CareerManagementJobData.map((data) => {
                                return (
                                    <CareerJobCart
                                        key={data.id}
                                        CareerJobCartClass='col-lg-4 col-md-6'
                                        CareerJobCartIcon={data.CareerJobCartIcon}
                                        CareerJobCartHeading={data.CareerJobCartHeading}
                                        CareerJobCartDescription={data.CareerJobCartDescription}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <div className='design_job_section'>
                        <div className='design_job_wrapper'>
                            <h5 className='design_job_wrapper_heading heading-h5'>QA Job Openings</h5>
                        </div>
                        <div className='row design_job_row_custom'>
                            {CareerQAJobData.map((data) => {
                                return (
                                    <CareerJobCart
                                        key={data.id}
                                        CareerJobCartClass='col-lg-4 col-md-6'
                                        CareerJobCartIcon={data.CareerJobCartIcon}
                                        CareerJobCartHeading={data.CareerJobCartHeading}
                                        CareerJobCartDescription={data.CareerJobCartDescription}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <AboutContactSec />
            </div>
        </div>
    )
}

export default CareerPage
