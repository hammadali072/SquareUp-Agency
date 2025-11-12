import React from 'react'

function ServicesPageCart(props) {
    return (
        <div className={`col_servicePageCart_otr ${props.ServicePageCartClass}`}>
            <div className='col_servicePageCart_inr'>
                <div className='icon_otr'>
                    <img className='icon' src={props.ServicePageCartIcon} alt='Icon' />
                </div>
                <p className='heading heading-mm'>{props.ServicesPageCartHeading}</p>
            </div>
        </div>
    )
}

export default ServicesPageCart
