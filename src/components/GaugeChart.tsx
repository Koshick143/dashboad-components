import React from 'react'
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { Card, CardContent, Typography ,Box, Divider } from '@mui/material';

import RemoveIcon from '@mui/icons-material/Remove';

 const GaugeChart = () => {
  return (
    <>

<Gauge
  value={5490}
  valueMax={10000}
  startAngle={-110}
  endAngle={110}
  height={200}
  sx={{
    [`& .${gaugeClasses.valueText}`]: {
      fontSize: 30,
      transform: 'translate(0px, 0px)',
    },
  }}
  text={
     ({ valueMax ,}) => `${valueMax}`
     
  }
 
/>

<Typography sx={{textAlign:'center'}} variant='body2' color='text.secondary'>Total user </Typography>

    <Card>
     <CardContent sx={{display:'flex' ,justifyContent:'space-between'}}>
        <Box sx={{display:'flex' ,alignItems:'center'}}> <RemoveIcon sx={{rotate:'90deg', fontSize:'40px', color:'blue'}}/> <Typography variant="body1" color="initial"> Premium </Typography> </Box>
        <Divider orientation='vertical' flexItem/>
        <Box sx={{display:'flex' ,alignItems:'center'}}>  <Typography variant="body1" color="initial"> normal </Typography><RemoveIcon sx={{rotate:'90deg', fontSize:'40px', color:'grey'}}/></Box>
     </CardContent>
    </Card>
    </>


  
  )
}


export default GaugeChart