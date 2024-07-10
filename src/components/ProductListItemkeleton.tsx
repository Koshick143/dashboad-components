import React from 'react';
import { Container, Box,  Skeleton } from '@mui/material';

const ProductListItemSkeleton = () => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'space-between', margin: '15px 4px' }}>
      <Box>
        <Skeleton variant="rectangular" width={50} height={50} />
      </Box>
      <Box sx={{ flexGrow: 1, marginLeft: '10px' }}>
        <Box sx={{ display: 'flex', minWidth: '70%', flexDirection: 'column' }}>
          <Box sx={{ marginBottom: '5px' }}>
            <Skeleton variant="text" width={100} height={20} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Skeleton variant="text" width={50} height={20} sx={{ marginRight: '5px' }} />
            <Skeleton variant="text" width={30} height={20} />
          </Box>
        </Box>
        <Box sx={{ marginTop: '10px' }}>
          <Skeleton variant="rectangular" width="120%" height={10} sx={{ position: 'relative', left: '-25%' }} />
        </Box>
      </Box>
    </Container>
  );
}

export default ProductListItemSkeleton;
