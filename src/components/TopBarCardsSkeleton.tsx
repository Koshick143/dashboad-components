import React from 'react';
import { Card, CardContent, Box, Skeleton } from '@mui/material';


const TopBarCardsSkeleton = () => {
  return (
    <Card sx={{ width: '25%', margin: '1%' }}>
      <CardContent>
        <Box sx={{ margin: '0 0 5px 0', display: 'flex', justifyContent: 'space-between' }}>
          <Box><Skeleton width={80} /></Box>
         
        </Box>
        <Box sx={{ margin: '0 0 19px 0' }}><Skeleton width={60} /></Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Box sx={{ display: 'flex' }}><Skeleton width={20} /></Box>
          <Box><Skeleton width={120} /></Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TopBarCardsSkeleton;
