import React , {useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import { getCatItems } from "../features/catSlice";
import {useDispatch} from 'react-redux'

const Quiz = () => {
  const dispatch = useDispatch()
  
   useEffect(() => {
     const timeOutId = setTimeout(()=>{
       dispatch(getCatItems());
     },1000)

     return () => {
      clearInterval(timeOutId)
     }
   }, []);

  return (
    <main className='section-center'>
    
    </main>
    
  )
}

export default Quiz