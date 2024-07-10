import React from 'react'
import { Card, CardContent ,Box, Typography } from '@mui/material'

import { IoIosTrendingDown } from "react-icons/io";
import { IoIosTrendingUp } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";

const TopBarCards = () => {
  return (
   <Card sx={{width:'25%' ,margin:'1%'}}>
    <CardContent sx={{ }}>
        <Box sx={{margin:'0 0 5px 0', display:'flex',justifyContent:'space-between'}} >
            <Box><Typography variant="body1" color="text.seconadry">Total sales</Typography></Box>
            <Box> <BsThreeDots/></Box>
        </Box>
        <Box sx={{margin:'0 0 19px 0'}} ><Typography fontWeight='bold' variant="body1" color="initial">$7769</Typography></Box>
        <Box sx={{display:'flex' , justifyContent:'space-around'}} > 
           <Box sx={{display:'flex' ,}}><IoIosTrendingDown color='red'/> <Typography variant="body3" color="initial"> 2%</Typography></Box>
           <Box> <Typography variant="body2" color="text.secondary">Compared to last month</Typography> </Box> 
        </Box>
    </CardContent>
   </Card>
  )
}

export default TopBarCards
