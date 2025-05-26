import Breadcumb from '@/components/Breadcumb'
import Branch from '@/components/contact/Branch'
import ContactForm from '@/components/contact/ContactForm'
import Map from '@/components/contact/Map'
import React from 'react'

function page() {
  return (
    <div>
        <Breadcumb title="Contact" subtitle="Contact"/>
        <Branch/>
        <ContactForm/>
        <Map/>
    </div>
  )
}

export default page