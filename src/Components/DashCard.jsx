import { Box, Grid, Icon, Paper, Typography } from "@mui/material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import React from "react";

const DashCard = ({ totalData}) => {
  // const {totalEvents,totalTicketSold,totalInterested,totalUsers}={params};
  if (!totalData) {
    // Handle the case where totalData is undefined
    return <div>Loading...</div>;
  }
const { totalEvents, totalTicketSold, totalInterested, totalUsers } = totalData;
  console.log(totalEvents);
    const data = [
        { icon: <EmojiEventsIcon color="success"/>,title: 'Events', quantity: totalEvents },
        { icon: <ConfirmationNumberIcon color="primary"/>,title: 'Tickets Sold', quantity: totalTicketSold  },
        { icon: <FavoriteIcon color="error"/>,title: 'Interested', quantity: totalInterested  },
        { icon: <SupervisedUserCircleIcon color="secondary"/>,title: 'User', quantity: totalUsers  },
      ];
      const iconStyle = {
        fontSize: 'large', // Adjust the value as needed
      };
  return (
    <Grid container spacing={0}>
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
            <Icon sx={{ fontSize: '40',minHeight: 60,mr:'5px' }}>{item.icon}</Icon>
          <div className="flex flex-col">
          <Typography variant="h5" align="center">
            {item.quantity}+
          </Typography>
          <Typography variant="body1" align="center">
            {item.title}
          </Typography>
          </div>
        </Paper>
      </Grid>
    ))}
  </Grid>
  );
};

export default DashCard;
