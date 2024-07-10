import {useState} from 'react'
import { Card, Box, Typography, Select, MenuItem } from '@mui/material';

import { BsThreeDots } from "react-icons/bs";
import ProductListItem from './ProductListItem';
import ProductListItemSkeleton from './ProductListItemkeleton';

 const ProductList = () => {

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
  
    const [selectedMonth, setSelectedMonth] = useState('');
    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
      };
    
  return (
    <Card sx={{width:'25%' ,padding:'0 10px'}}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1" color="initial">Top Products</Typography>
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
        <ProductListItem/>
        <ProductListItemSkeleton/>
        <ProductListItem/>
        <ProductListItemSkeleton/>
    </Card>
  )
}

export default ProductList
