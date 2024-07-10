import { Container } from '@mui/material'
import React from 'react'
import  TopBarCards  from './TopBarCards'
import TopBarCardsSkeleton from './TopBarCardsSkeleton'

 const TopBar = () => {
  return (
   <Container sx={{display:'flex' ,width:'80vw'}}>
    <TopBarCards/>
    <TopBarCardsSkeleton/>
    <TopBarCards/>
    <TopBarCardsSkeleton/>
   </Container>
  )
}

export default TopBar
