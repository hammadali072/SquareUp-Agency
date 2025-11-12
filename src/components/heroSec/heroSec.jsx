import React from 'react'
import { useNavigate } from 'react-router-dom';
import ThemeBtn from '../themeBtn/themeBtn'
import './heroSec.scss';

const HeroSec = () => {
    const navigate = useNavigate();
    return (
        <div className='HeroSection'>
            <div className="container_fluid">
                <div className="hero_inr">
                    <h1 className="heading heading-h1">A Digital Product Studio that will Work</h1>
                    <div className="tags_main">
                        <div className="tags_otr">
                            <p className="text heading-l">
                                For
                                <span className="text_inr">StartsUp</span>
                                ,
                                <span className="text_inr">Enterprise leaders</span>
                                ,
                                <span className="text_inr">Media & Publishers</span>
                                and
                                <span className="text_inr">Social Good</span>
                            </p>
                        </div>
                    </div>
                    <div className="action_main">
                        <div className="action_otr">
                            <ThemeBtn
                                ButtonClass='work_btn border_btn'
                                ButtonText='Our Works'
                                onClick={() => { navigate("/work") }}
                            />
                        </div>
                        <div className="action_otr">
                            <ThemeBtn
                                ButtonClass='cta_btn primary_btn'
                                ButtonText='Contact Us'
                                onClick={() => { navigate("/contact") }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSec
