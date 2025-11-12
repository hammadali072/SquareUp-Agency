import React from 'react'

import HeroSec from '../../components/heroSec/heroSec'
import ServiceSec from '../../components/serviceSec/serviceSec'
import ChooseUsSec from '../../components/chooseUsSec/chooseUsSec'
import TestimonialsSec from '../../components/testimonialsSec/testimonialsSec'
import FAQSec from '../../components/faqSec/faqSec'
import ContactSec from '../../components/contactSec/contactSec'

const LandingPage = () => {
  return (
    <>
      <HeroSec />
      <ServiceSec />
      <ChooseUsSec />
      <TestimonialsSec />
      <FAQSec />
      <ContactSec />
    </>
  )
}

export default LandingPage
