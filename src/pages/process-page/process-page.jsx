import React from 'react'
import HeaderInner from '../../components/header/headerInner'
import HeaderWrapper from '../../components/header/headerWrapper'
import ProcessCart from './ProcessCart'
import { ProcessCartData } from '../../Data'
import './process-page.scss'

import bg from '../../assets/service-section-wrapper-bg.webp'

const ProcessPage = () => {
    return (
        <div className='ProcessPage'>
            <div className='container_fluid'>
                <HeaderInner
                    WrapperHeading="Process of Starting the Project"
                    WrapperDescription="At SquareUp, we value transparency, collaboration, and delivering exceptional results."
                    WrapperBackground={bg}
                />
                <div className='process_container_main'>
                    <HeaderWrapper
                        HeaderWrapperTitle="At SquareUp"
                        HeaderWrapperDescription="We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach."
                        HeaderWrapperButtonText="Here's an overview of our typical process:"
                    />
                    <div className='row row_custom'>
                        {ProcessCartData.map((data) => {
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
            </div>
        </div>
    )
}

export default ProcessPage
