import { useState } from 'react'

import './App.css'
import { TopBar } from './components/TopBar'
import RevenueChart from './components/RevenueChart'
import RevenueChartSkeleton from './components/RevenueChartSkeleton'

function App() {

  return (
    <>
     <TopBar/>
     <RevenueChartSkeleton/>
     <RevenueChart/>
    </>
  )
}

export default App
