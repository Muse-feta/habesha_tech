import AppHero from '@/components/appointement/AppHero'
import Breadcumb from '@/components/Breadcumb'
import React from 'react'

function page() {
  return (
    <div>
        <Breadcumb title="Appointements" subtitle="Appointements"/>
        <AppHero/>
    </div>
  )
}

export default page