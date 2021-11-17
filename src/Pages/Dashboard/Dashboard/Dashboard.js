import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink, useRouteMatch, Switch, Route, } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Button, CircularProgress, List } from '@mui/material';
import './Dashboard.css';
import MySchedule from '../UsersPart/MySchedule/MySchedule';
import Payment from '../UsersPart/Payment/Payment';
import GiveReview from '../UsersPart/GiveReview/GiveReview';
import ManageSchedule from '../AdminPart/ManageSchedule/ManageSchedule';
import AddApartmentInfo from '../AdminPart/AddApartmentInfo/AddApartmentInfo';
import MakeAdmin from '../AdminPart/MakeAdmin/MakeAdmin';
import ManageApartment from '../AdminPart/ManageApartment/ManageApartment';

const drawerWidth = 240;

function Dashboard(props) {
  const { isLoading, logOut, admin } = useAuth();
  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  if (isLoading) {
    return <CircularProgress />
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />

      {admin ?
        <List className="dashboard-menu">
          <NavLink className="menu-item" to="/">
            <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink className="menu-item" to={`${url}`}>
            <Button color="inherit">Manage Schedule</Button>
          </NavLink>
          <NavLink className="menu-item" to={`${url}/addApartmentInfo`}>
            <Button color="inherit">Add Apartment Info</Button>
          </NavLink>
          <NavLink className="menu-item" to={`${url}/makeAdmin`}>
            <Button color="inherit">Make Admin</Button>
          </NavLink>
          <NavLink className="menu-item" to={`${url}/manageApartment`}>
            <Button color="inherit">Manage Apartment</Button>
          </NavLink>
          <NavLink className="menu-item" to="/">
            <Button onClick={logOut} color="inherit">LogOut</Button>
          </NavLink>

        </List>
        :
        <List className="dashboard-menu">
          <NavLink className="menu-item" to="/">
            <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink className="menu-item" to={`${url}`}>
            <Button color="inherit">My Schedule</Button>
          </NavLink>
          <NavLink className="menu-item" to={`${url}/payment`}>
            <Button color="inherit">Payment</Button>
          </NavLink>
          <NavLink className="menu-item" to={`${url}/giveReview`}>
            <Button color="inherit">Give Review</Button>
          </NavLink>
          <NavLink className="menu-item" to="/">
            <Button onClick={logOut} color="inherit">LogOut</Button>
          </NavLink>

        </List>
      }
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
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
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {!admin &&
          <Switch>
            <Route exact path={path}>
              <MySchedule></MySchedule>
            </Route>
            <Route path={`${path}/payment`}>
              <Payment />
            </Route>
            <Route path={`${path}/giveReview`}>
              <GiveReview />
            </Route>
          </Switch>
        }
        {admin &&
          <Switch>
            <Route exact path={path}>
              <ManageSchedule></ManageSchedule>
            </Route>
            <Route path={`${path}/addApartmentInfo`}>
              <AddApartmentInfo></AddApartmentInfo>
            </Route>
            <Route path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path={`${path}/manageApartment`}>
              <ManageApartment></ManageApartment>
            </Route>
          </Switch>
        }
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;