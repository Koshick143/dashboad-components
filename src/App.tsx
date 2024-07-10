import { useState } from 'react'

import './App.css'
import  TopBar  from './components/TopBar'
import RevenueChart from './components/RevenueChart'
import RevenueChartSkeleton from './components/RevenueChartSkeleton'
import ProductList from './components/ProductList'

import { Box } from '@mui/material'

function App() {

  return (
    <>
     <TopBar/>
     <Box >
      <Box sx={{display:'flex'}}>
      <RevenueChart/>
      <ProductList/>
      </Box>
       <RevenueChartSkeleton/>
       

     </Box>
   
    </>
  )
}

export default App
