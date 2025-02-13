import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Layout from './Layout'

function Home() {
  return (
    <div className='h-screen'>
      <Header />
      <Layout />
      <Footer />
    </div>
  )
}

export default Home