import React from 'react'
import { useEffect } from 'react';
import style from './Pages.module.css'

const HomePage = () => {
  useEffect(()=>{
    document.title = `KoinX | Home`;
  })
  return (
    <div className={style.pageContainer}>
    
    </div>
  )
}

export default HomePage
