import { Container, Box, Typography } from '@mui/material'
import React from 'react'
import BorderLinearProgress from '@mui/material/LinearProgress';

 const ProductListItem = () => {
  return (
     <Container sx={{display:'flex' ,justifyContent:'space-between', margin:'15px 4px'}}>
        <Box>
           <img width='50px' src="https://plus.unsplash.com/premium_photo-1682539426255-9750ff5c62a2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product img" />
        </Box>
        <Box >
            <Box sx={{display:'flex' ,minWidth:'70%'}}>
                <Box sx={{margin:'0 5px 10px 5px'}}>
                    <Typography variant="body1" color="text.secondary">Product name</Typography>
                </Box>
                <Box sx={{display:'flex' }}>
                    <Box sx={{margin:'0 5px 10px 5px'}}>
                        <Typography variant="body1" color="text.secondary">93/234</Typography>
                    </Box>
                    <Box>
                        67%
                    </Box>
                </Box>
            </Box>
            <Box>
            <BorderLinearProgress sx={{width:'120%', position:'relative',left:"-25%"}} variant="determinate"value={50} />
            </Box>
        </Box>
     </Container>
  )
}

export default ProductListItem
