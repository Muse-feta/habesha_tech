import Breadcumb from '@/components/Breadcumb'
import Product from '@/components/product/Product'
import Script from 'next/script'
import React from 'react'

function page() {
  return (
    <div>
        <Breadcumb title="Products" subtitle="Products"/>
        <Product/>
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
    </div>
  )
}

export default page