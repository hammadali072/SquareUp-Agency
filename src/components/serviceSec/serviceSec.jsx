import React from 'react';
import HeaderInner from '../header/headerInner';
import ServiceCart from './ServiceCart';
import { ServiceSectionData } from '../../Data';
import './serviceSec.scss';

import serviceSerctionWrapperBackground from '../../assets/service-section-wrapper-bg.webp'

const ServiceSec = () => {
    return (
        <section className='ServiceSection'>
            <div className='container_fluid'>
                <HeaderInner
                    WrapperHeading='Our Services'
                    WrapperDescription='Transform your brand with our innovative digital solutions that captivate and engage your audience.'
                    WrapperBackground={serviceSerctionWrapperBackground}
                />
                <div className='row row_custom'>
                    {ServiceSectionData.map((data) => (
                        <ServiceCart
                            key={data.id}
                            ServiceCartIcon={data.ServiceCartIcon}
                            ServiceCartClass='col-lg-4 col-md-6'
                            ServiceHeading={data.ServiceHeading}
                            ServiceDescription={data.ServiceDescription}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServiceSec
