import React from 'react';
import { Card, CardContent, Skeleton } from '@mui/material';

const ChartCardSkeleton: React.FC = () => {
  return (
    <Card sx={{ width: '25vw' }}>
      <CardContent>
        <Skeleton variant="rectangular" width="100%" height={100} />
        <Skeleton variant="text" width="80%" height={30} />
        <Skeleton variant="text" width="60%" height={30} />
      </CardContent>
    </Card>
  );
}

export default ChartCardSkeleton;
