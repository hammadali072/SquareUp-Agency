import React from 'react'
import { Link } from 'react-router-dom'
import './blog-page.scss'

import arrowIcon from '../../assets/arrow-icon.webp'

function BlogCart(props) {
    return (
        <div className={`col_blogCart_otr ${props.BlogCartClass}`}>
            <div className='col_blogCart_inr'>
                <div className='blogCart_heading_otr'>
                    <h5 className='blogCart_heading heading-h5'>{props.BlogCartHeading}</h5>
                </div>
                <div className='blogCart_img_content_otr'>
                    <div className='img_otr'>
                        <img className='img' src={props.BlogCartImage} alt='img' />
                    </div>
                    <div className='blogCart_content'>
                        <div className='blogCart_heading_icon_otr'>
                            <div className='heading_link_otr'>
                                <Link className='content_heading heading-h4'>{props.BlogCartContentHeading}</Link>
                                <div className='link_otr'>
                                    <a className='link_text heading-m' href={props.BlogCartContentLinkAddress}>{props.BlogCartContentLinkText}</a>
                                </div>
                            </div>
                            <div className='icon_otr'>
                                <img className='icon' src={arrowIcon} alt='Icon' />
                            </div>
                        </div>
                        <p className='desc heading-s'>{props.BlogCartDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCart
