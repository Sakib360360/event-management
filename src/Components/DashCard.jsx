import { Box, Grid, Icon, Paper, Typography } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import React from "react";

const DashCard = ({ params }) => {
    const data = [
        { icon: <PostAddIcon color="error"/>,title: 'Paper 1', quantity: 100 },
        { icon: <PostAddIcon color="primary"/>,title: 'Paper 2', quantity: 200  },
        { icon: <PostAddIcon color="success"/>,title: 'Paper 3', quantity: 300  },
        { icon: <PostAddIcon color="secondary"/>,title: 'Paper 4', quantity: 400  },
      ];
  return (
    <Grid container spacing={1}>
    {data.map((item, index) => (
      <Grid key={index} item xs={12} sm={6} md={3}>
        <Paper
          sx={{
            height: 100,
            backgroundColor: "rgb(24 24 27)",
            color: "rgba(255, 255, 255, 0.8)",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt:2,
            mx:1
          }}
          elevation={3}
        >
            <Icon>{item.icon}</Icon>
          <Typography variant="h6" align="center">
            {item.title}
          </Typography>
          <Typography variant="body2" align="center">
            {item.content}
          </Typography>
        </Paper>
      </Grid>
    ))}
  </Grid>
    // <Box
    //   sx={{
    //     display: "flex",
    //     flexWrap: "wrap",
    //     "& > :not(style)": {
    //       mx: 'auto',
    //       my:2,
    //       width: "25%",
    //       height: 100,
    //       backgroundColor: "rgb(38, 38, 38)",
    //       color: "rgba(255, 255, 255, 0.8)",
    //     },
    //   }}
    // >
    //   <Paper elevation={3} />
    //   <Paper elevation={3} />
    //   <Paper elevation={3} />
    //   <Paper elevation={3} />
    // </Box>
    //     <div className='grid lg:grid-cols-5 gap-4 my-4'>
    //         <div className='lg:col-span-2 col-span-1 bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-between w-full border p-4 rounded-lg'>
    //             <div className='flex flex-col w-full pb-4'>
    //                 <p className='text-2xl font-bold'>35</p>
    //                 <p className='text-grey-600'>totalEvents</p>
    //             </div>
    //             <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
    //                 <span className='text-green-700 text-lg'>+20%</span>
    //             </p>
    //         </div>
    //         <div className='lg:col-span-2 col-span-1 bg-gradient-to-r from-indigo-500 via-purple-400 flex justify-between w-full border p-4 rounded-lg'>
    //         <div className='flex flex-col w-full pb-4'>
    //                 <p>1280+</p>
    //                 <p>Total Participent</p>
    //             </div>
    //             <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
    //                 <span className='text-green-700 text-lg'>+30%</span>
    //             </p>
    //         </div>
    //     </div>
  );
};

export default DashCard;
