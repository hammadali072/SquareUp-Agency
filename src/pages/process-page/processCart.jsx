import React from 'react'
import './process-page.scss'

function ProcessCart(props) {
    return (
        <div className={`col_processCart_otr ${props.processCartClass}`}>
            <div className='col_processCart_inr'>
                <div className='num_heading_otr'>
                    <h1 className='num'>{props.processCartNumber}</h1>
                    <div className='heading_otr'>
                        <h4 className='heading heading-h4'>{props.ProcessCartHeading}</h4>
                        <div className='line'></div>
                    </div>
                </div>
                <p className='desc heading-s'>{props.ProcessCartDescription}</p>
            </div>
        </div>
    )
}

export default ProcessCart
