import React, { ReactNode } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface ChartCardProps {
  children?: ReactNode;
}

const ChartCard: React.FC<ChartCardProps> = ({ children }) => {
  return (
    <Card sx={{width:'25vw'}}>

      <CardContent >
        {children}
      </CardContent>
    </Card>
  );
}

export default ChartCard;
