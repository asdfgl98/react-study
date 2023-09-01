import React, { useState } from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import { ThemeContent } from '../context/ThemeContent'



const Page = () => {

  const [theme, setTheme] = useState('Light')
  console.log(theme)

  return (
    <ThemeContent.Provider value={{theme, setTheme}}>
    <div className='page'>
      <Header/>
      <Content/>
      <Footer/>
    </div>
    </ThemeContent.Provider>
  )
}

export default Page