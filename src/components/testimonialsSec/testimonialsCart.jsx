import React from 'react';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import { Link } from 'react-router-dom';

function TestimonialsCart(props) {
    return (
        <div className={`col_tesrimonialsCart_otr ${props.TestimonialsCartClass}`}>
            <div className='col_tesrimonialsCart_inr'>
                <div className='content'>
                    <p className='heading heading-h5'>{props.TestimonialsCartHeading}</p>
                    <p className='desc heading-s'>{props.TestimonialsCartDescription}</p>
                </div>
                <div className='creator_website_main'>
                    <div className='creator_main'>
                        <Link className='creator_otr'>
                            <img className='creator' src={props.TestimonialsCartCreatorImage} alt='Creator' />
                        </Link>
                        <div className='creator_content'>
                            <Link className='creator_heading heading-mm'>{props.TestimonialsCartCreatorName}</Link>
                            <p className='creator_text heading-s'>{props.TestimonialsCartCreatorProfession}</p>
                        </div>
                    </div>
                    <div className='action_otr'>
                        <ThemeBtn
                            ButtonClass='website_btn Secondary_btn'
                            ButtonText='Open Website'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsCart
