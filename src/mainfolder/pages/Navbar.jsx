import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
function Navbar() {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
      };

    
      const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation">
      <AppBar position='static'>
     <Toolbar variant="dense">
      <Typography variant="h6" color="inherit" component="div"  role="presentation"onClick={toggleDrawer(false)}>
      <Link to="/" id='link1'>Home</Link>
      </Typography>
      </Toolbar>
    </AppBar>
          <List>
              <ListItem >
              <Stack direction="column" spacing={2}>
               <ListItemButton>
                  <ListItemText >
                  <Link to="/exchange" id='link'>Exchange Rates(Live)</Link>
                  </ListItemText>
                </ListItemButton>
                <ListItemButton>
                  <ListItemText>
                  <Link to="/about" id='link'>About</Link>
                  </ListItemText>
                </ListItemButton>
                <ListItemButton>
                  <ListItemText>
                  <Link to="/errorpage" id='link'>Error page</Link>
                  </ListItemText>
                </ListItemButton>
             </Stack>
              </ListItem>
          </List>
        </Box>
      );
  return (
    <AppBar position='static'>
     <Toolbar variant="dense">
     <div id='menuicon'>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      <Typography onClick={toggleDrawer(true)}>
        <MenuIcon/>
        </Typography>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        { DrawerList}
      </Drawer>
      </IconButton>
      </div>
      <Typography variant="h6" color="inherit" component="div" sx={{mr:12}}>
      Loan Calculator
      </Typography>
         <div id='menu-display'>
         <Stack direction="row" spacing={2} sx={{ml:50,mr:3}}>
         <Button color="inherit">
         <Link to="/" id='link'>HOME</Link>
         </Button>
         <Button color="inherit">
          <Link to="/exchange" id='link'>EXCHNAGE RATES(LIVE)</Link>
         </Button>
         <Button color="inherit">
          <Link to="/about" id='link'>ABOUT</Link>
         </Button>
         <Button color="inherit">
          <Link to="/errorpage" id='link'>ERROR PAGE</Link>
         </Button>
         </Stack>
         </div>
        <div>
        <Switch/>
        </div>
        </Toolbar>
        <Outlet/>
    </AppBar>
  )
}

export default Navbar