import React from 'react'
import HeaderInner from '../header/headerInner'
import chooseUsWrapperBackground from '../../assets/service-section-wrapper-bg.webp'
import ChooseUsCart from './chooseUsCart'
import { ChooseUsSectionData } from '../../Data'
import './chooseUsSec.scss';

const ChooseUsSec = () => {
    return (
        <section className='ChooseUsSection'>
            <div className='container_fluid'>
                <HeaderInner
                    WrapperHeading='Why Choose SquareUp?'
                    WrapperDescription='Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.'
                    WrapperBackground={chooseUsWrapperBackground}
                />
                <div className='row row_custom'>
                    {ChooseUsSectionData.map((data) => {
                        return (
                            <ChooseUsCart
                                key={data.id}
                                ChooseUsClass='col-lg-6 col-md-6'
                                ChooseUsCartIcon={data.ChooseUsCartIcon}
                                ChooseUsCartHeading={data.ChooseUsCartHeading}
                                ChooseUsCartDescription={data.ChooseUsCartDescription}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ChooseUsSec

