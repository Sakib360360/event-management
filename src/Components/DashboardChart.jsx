"use client";
import * as React from 'react';
import { Line } from "react-chartjs-2";
import { LineChart } from '@mui/x-charts/LineChart';
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from '@mui/material/styles';

// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale, // x axis
//   LinearScale, // y axis
//   PointElement,
//   Legend,
//   Tooltip,
//   Filler,
// } from "chart.js";

// ChartJS.register(
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Legend,
//   Tooltip,
//   Filler
// );

// const salesData = [
//   { month: "January", sales: 100 },
//   { month: "February", sales: 150 },
//   { month: "March", sales: 200 },
//   { month: "April", sales: 120 },
//   { month: "May", sales: 180 },
//   { month: "June", sales: 230 },
//   { month: "July", sales: 240 },
//   { month: "August", sales: 270 },
//   { month: "September", sales: 280 },
// ];
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

  const StyledText = styled('text')(({ theme }) => ({
    fill: 'rgba(255, 255, 255, 0.8)',
    // textAnchor: 'middle',
    // dominantBaseline: 'central',
    fontSize: 30,
  }));
  // const data = {
  //   labels: salesData.map((data) => data.month),
  //   datasets: [
  //     {
  //       label: "Sales",
  //       data: salesData.map((data) => data.sales),
  //       borderColor: "#cb0c9f",
  //       borderWidth: 3,
  //       pointBorderColor: "#cb0c9f",
  //       pointBorderWidth: 3,
  //       tension: 0.5,
  //       fill: true,
  //       backgroundColor: (context) => {
  //         const ctx = context.chart.ctx;
  //         const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  //         gradient.addColorStop(0, "#f797e1");
  //         gradient.addColorStop(1, "white");
  //         return gradient;
  //       },
  //     },
  //   ],
  // };

  // const options = {
  //   plugins: {
  //     legend: true,
  //   },
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   scales: {
  //     y: {
  //       ticks: {
  //         font: {
  //           size: 17,
  //           weight: "bold",
  //         },
  //       },
  //       title: {
  //         display: true,
  //         text: "Sales",
  //         padding: {
  //           bottom: 10,
  //         },
  //         font: {
  //           size: 20,
  //           style: "italic",
  //           family: "Arial",
  //         },
  //       },
  //       min: 50,
  //     },
  //     x: {
  //       ticks: {
  //         font: {
  //           size: 17,
  //           weight: "bold",
  //         },
  //       },
  //       title: {
  //         display: true,
  //         text: "Month",
  //         padding: {
  //           top: 10,
  //         },
  //         font: {
  //           size: 20,
  //           style: "italic",
  //           family: "Arial",
  //         },
  //       },
  //     },
  //   },
  // };

  return (
       <LineChart
    width={400}
    height={300}
    series={[
      { data: pData, label: '2023' ,StyledText},
      { data: uData, label: '2022',StyledText},
    ]}
    xAxis={[{ scaleType: 'point', data: xLabels,StyledText}]}
  />
    // <div>
    //   <h1 className="font-semisbold text-2xl text-center mt-8">
    //    Ticket Sales
    //   </h1>
    //   <div
    //     style={{
    //       width: "100%",
    //       padding: "25px",
    //       cursor: "pointer",
    //     }}
    //   >
    //     <Line data={data} options={options}></Line>
    //   </div>
    // </div>
  );
}

export default DashboardChart;