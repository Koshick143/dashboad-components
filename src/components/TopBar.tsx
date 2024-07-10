import { Container } from '@mui/material'
import React from 'react'
import { TopBarCards } from './TopBarCards'

export const TopBar = () => {
  return (
   <Container sx={{display:'flex' ,width:'80vw'}}>
    <TopBarCards/>
    <TopBarCards/>
    <TopBarCards/>
    <TopBarCards/>
   </Container>
  )
}
