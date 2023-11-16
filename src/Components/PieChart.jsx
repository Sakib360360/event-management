"use client"
import React from 'react';
import { pieArcLabelClasses, PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';
import './basic.css'


const data = [
    { value: 5, label: 'Successfull' },
    { value: 10, label: 'Unsuccessfull' },

  ];
  
  const size = {
    width: 350,
    height: 200,
  };
  const theme = createTheme({
    overrides: {
      MuiSvgText: {
        root: {
          fill: 'red', // Set the fill color for all SVG text components
        },
      },
    },
  });
  const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.common.white,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 30,
  }));

  function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  }
const PieChartComp = ({status}) => {
  const success=status.paymentSuccess;
  const fail=status.paymentUnsuccess;

  const data = [
    { value: success, label: 'Success' },
    { value: fail, label: 'Fail' },
  ];
  const ratio=parseInt((success/(success+fail)*100))
    return (
        <ThemeProvider theme={theme}>
          <Grid container sx={{py:10}}>
            {/* Payment Success Rate */}
          <PieChart className='colorPie' series={[{ data, innerRadius: 60 }]} 
          arcLinkLabelsClass={pieArcLabelClasses.label }
          responsive
          maintainAspectRatio={false}
         {...size}>
        <PieCenterLabel
        >{ratio}%</PieCenterLabel>
      </PieChart>
          </Grid>
        </ThemeProvider>
    );
};

export default PieChartComp;