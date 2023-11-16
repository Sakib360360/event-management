"use client";
import AuthContext from "@/context/AuthContext";
import { Feedback, People } from "@mui/icons-material";import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LineAxisIcon from "@mui/icons-material/LineAxis";
import MenuIcon from "@mui/icons-material/Menu";
import MessageIcon from "@mui/icons-material/Message";
import PaymentIcon from "@mui/icons-material/Payment";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { Avatar, Stack, Tooltip } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import './ResponsiveDrawer.css'

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
    { icon: <Feedback />, label: "Feedback", href: "/dashboard/feedbacks" },
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
      href: "/dashboard/registered-events",
    },
    {
      icon: <FavoriteIcon />,
      label: "Favorite",
      href: "/dashboard/favourite-events",
    },
    { icon: <PaymentIcon />, label: "Payments", href: "/dashboard/payments" },
  ];
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { user } = useContext(AuthContext);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState();
  // *******fixing******//
  useEffect(() => {
    if (user) {
      setLoading(true);
      fetch(
        `https://server-event-management-iota.vercel.app/users/role/${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setRole(data.role);
          console.log(data.role);
        })
        .catch((error) => {
          console.error("Error fetching user role:", error);
        });
      setLoading(false);
    }
  }, [user]);
  const isAdmin = role === "admin";
  const isOrganizer = role === "organizer";

  const drawer = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        backgroundColor: "rgb(42, 45, 62);",
        color: "rgba(255, 255, 255, 0.8)",
        paddingTop: 2,
      }}
    >
      {loading && <span className="loading loading-dots loading-lg"></span>}
      <div>
        <Typography variant="h5" className="active" sx={{mt:4 ,mx:7,}}>EventGuru</Typography>
        <Toolbar />
        <div>
          <Link href="/dashboard">
            <ListItemButton
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
          </Link>
          {isOrganizer &&
            organizerData.map((item) => (
              <Link href={item.href} key={item.label}>
                <ListItemButton
                  // key={item.label}
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
              </Link>
            ))}
          {isAdmin &&
            adminData.map((item) => (
              <Link href={item.href} key={item.label}>
                <ListItemButton
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
              </Link>
            ))}
          {!isAdmin && !isOrganizer
            ? userData.map((item) => (
                <Link href={item.href} key={item.label}>
                  <ListItemButton
                    // key={item.label}

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
                </Link>
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
          <Stack direction="row" spacing={0} mx={4} mb={2}>
            {user &&
              <div className="flex flex-col gap-4">
            <Avatar className="my-auto"
              alt="Remy Sharp"
              src={user?.photoURL}
              sx={{ width: 50, height: 50 }}
            />
            <Typography variant="h6" pt={1}>
              {user.displayName?user.displayName:"Hello there"}
            </Typography>
            </div>}
            <div>
            <Link href="/">
            <Tooltip title="Home" arrow>
              <IconButton sx={{ color: "rgba(255,255,255,.8)", mt:6 ,ml:12}}>
                <ExitToAppIcon />
              </IconButton>
              </Tooltip>
            </Link>
            </div>
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
          backgroundColor: "rgb(42, 45, 62)",
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
            Dashboard
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
              backgroundColor: "rgb(42, 45, 62)",
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
              backgroundColor: "rgb(42, 45, 62)",
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
