import React from 'react';
import { Card, CardContent, Box,  Skeleton } from '@mui/material';

const RevenueChartSkeleton = () => {
  return (
    <Card sx={{ width: '60%', margin: '10px' }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Skeleton variant="text" width={100} height={30} />
          <Box display="flex" alignItems="center">
            <Skeleton variant="rectangular" width={120} height={30} sx={{ marginRight: '10px' }} />
            <Skeleton variant="circular" width={30} height={30} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
          <Box>
            <Skeleton variant="text" width={100} height={20} />
            <Skeleton variant="text" width={100} height={30} />
          </Box>
          <Box>
            <Skeleton variant="text" width={100} height={20} />
            <Skeleton variant="text" width={100} height={30} />
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1, marginTop: '20px' }}>
          <Skeleton variant="rectangular" height={100} width="100%" />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          {Array.from(new Array(12)).map((_, index) => (
            <Skeleton key={index} variant="text" width={50} height={20} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default RevenueChartSkeleton;
