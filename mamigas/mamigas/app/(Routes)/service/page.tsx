import Breadcumb from '@/components/Breadcumb'
import Services from '@/components/Services'
import ServicesBanner from '@/components/services/ServicesBanner'
import WorkingHours from '@/components/WorkingHours'
import React from 'react'

function page() {
  return (
    <div>
        <Breadcumb title="Services" subtitle="Services"/>
        <Services/>
        <ServicesBanner/>
        <WorkingHours/>
    </div>
  )
}

export default page