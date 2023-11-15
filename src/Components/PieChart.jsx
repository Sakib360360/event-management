"use client"
import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';


const data = [
    { value: 5, label: 'A' },
    { value: 10, label: 'B' },
    { value: 15, label: 'C' },
    { value: 20, label: 'D' },
  ];
  
  const size = {
    width: 400,
    height: 200,
  };
  
  const StyledText = styled('text')(({ theme }) => ({
    fill: 'rgba(255, 255, 255, 0.8)',
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
        <PieChart series={[{ data, innerRadius: 60 }]} {...size}>
        <PieCenterLabel
        >80%</PieCenterLabel>
      </PieChart>
    );
};

export default PieChartComp;