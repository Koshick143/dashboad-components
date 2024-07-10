import { useState } from 'react'

import './App.css'
import  TopBar  from './components/TopBar'
import RevenueChart from './components/RevenueChart'
import RevenueChartSkeleton from './components/RevenueChartSkeleton'
import ProductList from './components/ProductList'
import ChartCard from './components/ChartCard'
import GaugeChart from './components/GaugeChart'

import { Box,Typography } from '@mui/material'
import ChartCardSkeleton from './components/ChartCardSkeleton'

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
      <ChartCard>
      <Typography variant="body1" color="initial"> Registered User</Typography>
        <GaugeChart/>
      </ChartCard>
      <ChartCardSkeleton/>
    </>
  )
}

export default App
