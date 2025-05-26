import Breadcumb from '@/components/Breadcumb'
import Product from '@/components/product/Product'
import React from 'react'

function page() {
  return (
    <div>
        <Breadcumb title="Products" subtitle="Products"/>
        <Product/>
    </div>
  )
}

export default page