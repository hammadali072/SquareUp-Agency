import React from 'react'
import HeaderInner from '../../components/header/headerInner'
import DigitalWorldSec from '../../components/digitalWorldSec/digitalWorldSec'
import BlogCart from './blogCart'
import HeaderWrapper from '../../components/header/headerWrapper'
import { BlogPageCartData } from '../../Data'
import './blog-page.scss'

import bg from '../../assets/service-section-wrapper-bg.webp'

const BlogPage = () => {
    return (
        <div className='BlogPage'>
            <div className='container_fluid'>
                <HeaderInner
                    WrapperHeading='Our Works'
                    WrapperDescription='Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.'
                    WrapperBackground={bg}
                />
                <div className='blog_container_main'>
                    <HeaderWrapper
                        HeaderWrapperTitle="At SquareUp"
                        HeaderWrapperDescription="We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success."
                        HeaderWrapperButtonText="Here are ten examples of our notable works:"
                    />
                    <div className='row row_custom'>
                        {BlogPageCartData.map((data) => {
                            return (
                                <BlogCart
                                    BlogCartClass='col-lg-6 col-md-6'
                                    key={data.id}
                                    BlogCartHeading={data.BlogCartHeading}
                                    BlogCartImage={data.BlogCartImage}
                                    BlogCartContentHeading={data.BlogCartContentHeading}
                                    BlogCartContentLinkAddress={data.BlogCartContentLinkAddress}
                                    BlogCartContentLinkText={data.BlogCartContentLinkText}
                                    BlogCartDescription={data.BlogCartDescription}
                                />
                            )
                        })}
                    </div>
                </div>
                <DigitalWorldSec />
            </div>
        </div>
    )
}

export default BlogPage
