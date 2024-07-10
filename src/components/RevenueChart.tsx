import React, { useState } from 'react';
import { Card, CardContent, Box, Typography, Select, MenuItem } from '@mui/material';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

import CircleIcon from '@mui/icons-material/Circle';
import { BsThreeDots } from "react-icons/bs";

const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'
];

const data = [
  { month: 'January', revenue: 4000, target: 2400 },
  { month: 'February', revenue: 3000, target: 2210 },
  { month: 'March', revenue: 2000, target: 2290 },
  { month: 'April', revenue: 2780, target: 2000 },
  { month: 'May', revenue: 1890, target: 2181 },
  { month: 'June', revenue: 2390, target: 2500 },
  { month: 'July', revenue: 3490, target: 2100 },
  { month: 'August', revenue: 3000, target: 2300 },
  { month: 'September', revenue: 4000, target: 2400 },
  { month: 'October', revenue: 3000, target: 2210 },
  { month: 'November', revenue: 2000, target: 2290 },
  { month: 'December', revenue: 2780, target: 2000 },
];

const RevenueChart = () => {
  const [selectedMonth, setSelectedMonth] = useState('');

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <Card sx={{ width: '60%', margin: '10px' }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1" color="initial">Revenue</Typography>
          <Box>
            <Select
              value={selectedMonth}
              onChange={handleMonthChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Select month' }}
              sx={{ margin: '10px' }}
            >
              <MenuItem value="" disabled>Select month</MenuItem>
              {months.map((month, index) => (
                <MenuItem key={index} value={month}>{month}</MenuItem>
              ))}
            </Select>
            <BsThreeDots />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Box>
            <Typography variant="body1" color="text.secondary"><CircleIcon sx={{color:'blue' ,fontSize:'small'}}/> Total revenue</Typography>
            <Typography variant="body1" color="initial">$2345678</Typography>
          </Box>
          <Box>
            <Typography variant="body1" color="text.secondary"> <CircleIcon sx={{color:'red' ,fontSize:'small'}}/> Target</Typography>
            <Typography variant="body1" color="initial">$2345678</Typography>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1, height:'20vh' }}>
          <SparkLineChart
            plotType="line"
            data={data.map(item => item.revenue)}
            height={80}
            width={1000}
            colors={['blue']}
          />
          <SparkLineChart
            plotType="line"
            data={data.map(item => item.target)}
            height={80}
            width={1000}
            colors={['red']}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          {months.map((month, index) => (
            <Typography key={index} variant="body2" color="text.secondary">{month}</Typography>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default RevenueChart;
