"use client"
import React from 'react';
import { pieArcLabelClasses, PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';


const data = [
    { value: 5, label: 'A' },
    { value: 10, label: 'B' },
    { value: 15, label: 'C' },
    { value: 20, label: 'D' },
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
const PieChartComp = () => {
    return (
        <ThemeProvider theme={theme}>
          <Grid container>
          <PieChart series={[{ data, innerRadius: 60 }]} 
          arcLinkLabelsClass={pieArcLabelClasses.label}
          responsive
          maintainAspectRatio={false}
         {...size}>
        <PieCenterLabel
        >80%</PieCenterLabel>
      </PieChart>
          </Grid>
        </ThemeProvider>
    );
};

export default PieChartComp;