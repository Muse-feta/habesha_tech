import About from '@/components/About'
import CTA from '@/components/about/CTA'
import WhyChoose from '@/components/about/WhyChoose'
import Breadcumb from '@/components/Breadcumb'
import Counter from '@/components/Counter'
import Testimonials from '@/components/Testimonials'
import React from 'react'

function page() {
  return (
    <div>
        <Breadcumb title="About Us" subtitle="About Us"/>
        <About/>
        <Counter/>
        <WhyChoose/>
        {/* <CTA/> */}
        <Testimonials/>
    </div>
  )
}

export default page