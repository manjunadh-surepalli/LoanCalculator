import React, { useState } from 'react'
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
    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
      };
    
      const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <AppBar position='static'>
     <Toolbar variant="dense">
      <Typography variant="h6" color="inherit" component="div">
       Home
      </Typography>
      </Toolbar>
    </AppBar>
          <List>
              <ListItem >
              <Stack direction="column" spacing={2}>
               <ListItemButton>
                  <ListItemText >Exchange Rates (Live)</ListItemText>
                </ListItemButton>
                <ListItemButton>
                  <ListItemText>About</ListItemText>
                </ListItemButton>
                <ListItemButton>
                  <ListItemText>Error Page</ListItemText>
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
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      </Typography>
      </IconButton>
      </div>
      <Typography variant="h6" color="inherit" component="div" sx={{mr:12}}>
      Loan Calculator
      </Typography>
         <div id='menu-display'>
         <Stack direction="row" spacing={2} sx={{ml:50,mr:3}}>
         <Button color="inherit">HOME</Button>
         <Button color="inherit">EXCHNAGE RATES(LIVE)</Button>
         <Button color="inherit">ABOUT</Button>
         <Button color="inherit">ERROR PAGE</Button>
         </Stack>
         </div>
        <div>
        <Switch/>
        </div>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar