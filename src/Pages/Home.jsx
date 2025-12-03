import React from 'react'
import Takamine from '../Sections/Home/Takamine'
import Brands from '../Sections/Home/Brands'
import Popular from '../Sections/Home/Popular'
import Services from '../Sections/Home/Services'
import Join from '../Sections/Home/Join'

const Home = () => {
  return (
      <div>
       <Takamine/>  
       <Brands/>  
       <Popular/>  
       <Services/>  
       <Join/>  
    </div>
  )
}

export default Home