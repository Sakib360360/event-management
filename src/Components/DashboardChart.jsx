"use client";
import * as React from 'react';
import { Line } from "react-chartjs-2";
import { LineChart } from '@mui/x-charts/LineChart';
import { Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from '@mui/material/styles';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490,1234,3452,4500,1243,3278];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300,3456,3400,2487,4321,1234];
const xLabels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const DashboardChart = ()=> {

  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <LineChart
        xAxis={[{ scaleType: 'point', data: xLabels}]}
        yAxis={[
          { id: 'linearAxis', scaleType: 'linear' },
          { id: 'logAxis', scaleType: 'log' },
        ]}
        series={[
          { yAxisKey: 'linearAxis', data: pData, label: '2023' },
          { yAxisKey: 'logAxis', data: uData, label: '2022' },
        ]}
        leftAxis="linearAxis"
        rightAxis="logAxis"
        height={400}
        
      />
    </Box>
  );
}

export default DashboardChart;