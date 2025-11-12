import React from 'react'
import ThemeBtn from '../../components/themeBtn/ThemeBtn'
import './career-page.scss'

function CareerJobCart(props) {
    return (
        <div className={`col_careerJobCart_otr ${props.CareerJobCartClass}`}>
            <div className='col_careerJobCart_inr'>
                <div className='icon_otr'>
                    <img className='icon' src={props.CareerJobCartIcon} alt='Icon' />
                </div>
                <div className='content_otr'>
                    <p className='careerJobCart_heading heading-lm'>{props.CareerJobCartHeading}</p>
                    <p className='careerJobCart_desc heading-s'>{props.CareerJobCartDescription}</p>
                </div>
                <div className='action_otr'>
                    <ThemeBtn
                        ButtonClass='apply_btn Secondary_btn'
                        ButtonText='Apply Now'
                    />
                </div>
            </div>
        </div>
    )
}

export default CareerJobCart
