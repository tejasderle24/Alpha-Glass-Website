import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Application() {
  return (
    <div className = '' >
        <Header />
        {/* Hero Section */}
      <div className="items-center justify-center flex flex-col mt-8">
        <h1 className="text-4xl font-bold text-[#005B8C]">Application</h1>
        <p className="text-sm font-semibold text-[#1C2752]">Home | Application</p>
      </div>
        
        <Footer/>
        </div>
  )
}

export default Application