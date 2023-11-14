import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PostAddIcon from "@mui/icons-material/PostAdd";
import MessageIcon from "@mui/icons-material/Message";
import LineAxisIcon from "@mui/icons-material/LineAxis";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PaymentIcon from "@mui/icons-material/Payment";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Link from "next/link";
import { People } from "@mui/icons-material";
import { Avatar, Stack } from "@mui/material";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const adminData = [
    { icon: <People />, label: "Manage User", href: "/dashboard/manage-user" },
    {
      icon: <EmojiEventsIcon />,
      label: "All Events",
      href: "/dashboard/all-events",
    },
    { icon: <MessageIcon />, label: "Messages", href: "/dashboard/messages" },
  ];
  const organizerData = [
    {
      icon: <PostAddIcon />,
      label: "Create Event",
      href: "/dashboard/create-event",
    },
    {
      icon: <EmojiEventsIcon />,
      label: "My Events",
      href: "/dashboard/my-event",
    },
    {
      icon: <LineAxisIcon />,
      label: "Event Analytics",
      href: "/dashboard/event-analytics",
    },
  ];
  const userData = [
    {
      icon: <AppRegistrationIcon />,
      label: "Registered",
      href: "/dashboard/enrolled-events",
    },
    {
      icon: <FavoriteIcon />,
      label: "Favorite",
      href: "/dashboard/favourite-events",
    },
    { icon: <PaymentIcon />, label: "Payments", href: "/dashboard/payments" },
  ];
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isAdmin = false;
  const isOrganizer = true;

  const drawer = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        backgroundColor: "rgb(38, 38, 38)",
        color: "rgba(255, 255, 255, 0.8)",
        paddingTop: 2, // Adjust the top padding as needed
      }}
    >
      <div>
        <Toolbar />
        <div>
          <ListItemButton
            href='/dashboard'
            sx={{ py: 1, minHeight: 40, color: "rgba(255,255,255,.8)" }}
          >
            <ListItemIcon sx={{ color: "inherit" }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              primary="Dashboard"
              primaryTypographyProps={{ fontSize: 20, fontWeight: "medium" }}
            />
          </ListItemButton>
          {isOrganizer &&
            organizerData.map((item) => (
              <ListItemButton
                key={item.label}
                href={item.href}
                sx={{ py: 1, minHeight: 40, color: "rgba(255,255,255,.8)" }}
              >
                <ListItemIcon sx={{ color: "inherit" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: "medium",
                  }}
                />
              </ListItemButton>
            ))}
          {isAdmin &&
            adminData.map((item) => (
              <ListItemButton
                key={item.label}
                href={item.href}
                sx={{ py: 1, minHeight: 40, color: "rgba(255,255,255,.8)" }}
              >
                <ListItemIcon sx={{ color: "inherit" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: "medium",
                  }}
                />
              </ListItemButton>
            ))}
          {!isAdmin && !isOrganizer
            ? userData.map((item) => (
                <ListItemButton
                  key={item.label}
                  href={item.href}
                  sx={{ py: 0, minHeight: 32, color: "rgba(255,255,255,.8)" }}
                >
                  <ListItemIcon sx={{ color: "inherit" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontWeight: "medium",
                    }}
                  />
                </ListItemButton>
              ))
            : null}
          <Divider />
        </div>
      </div>
      <div
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
        }}
      ></div>
      <div>
        <div>
          <Stack direction="row" spacing={4} ml={2} mb={3}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 56, height: 56 }}
            />
            <Typography variant="h6" pt={1}>
              Sadia
            </Typography>
            <IconButton sx={{ color: "rgba(255,255,255,.8)" }}
            href="/"
            >
              <ExitToAppIcon />
            </IconButton>
          </Stack>
        </div>
      </div>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "rgb(38, 38, 38)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            EventGuru
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "rgb(38, 38, 38)",
            },
            height: "100vh",
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "rgb(38, 38, 38)",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
