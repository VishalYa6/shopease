import React from 'react'

import HeroSection from './components/HeroSection/HeroSection'
import NewArrivals from './components/Sections/NewArrivals'
import Category from './components/Sections/Categories/Category'
import content from './data/content.json'
import Footer from './components/Footer/Footer'


const Shop = () => {
  return (
    <>
     
      <HeroSection/>
      <NewArrivals/>
      {/* prefer sections from content.pages.shop.sections which include images */}
      {content?.pages?.shop?.sections ? (
        content.pages.shop.sections.map((section, idx) => {
          const dataWithPublicImages = section.data?.map(d => ({
            ...d,
            // convert './images/xxx' to '/images/xxx' pointing to public folder
            image: d.image ? process.env.PUBLIC_URL + d.image.replace(/^\.\//, '/') : ''
          }))
          return <Category key={section.title + idx} title={section.title} data={dataWithPublicImages} />
        })
      ) : (
        // fallback to older categories structure
        content?.categories && content?.categories?.map((item, index) => <Category key={item?.title+index} {...item}/> )
      )}
      <Footer content={content?.footer}/>
    </>
  )
}

export default Shop