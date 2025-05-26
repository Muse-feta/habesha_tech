import MainBlog from '@/components/blog/MainBlog'
import Breadcumb from '@/components/Breadcumb'
import React from 'react'

function page() {
  return (
    <div>
        <Breadcumb title="Our Latest Blog's" subtitle="Blog"/>
        <MainBlog/>
    </div>
  )
}

export default page