import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../../logo.png';
import { NavLink } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Navigation from '../Navigation/Navigation';
import './Navbar.css';
const drawerWidth = 240;

const Navbar = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <div className="mobile-navigate">
                <Navigation></Navigation>
            </div>



        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    const rightAlign = {
        textAlign: 'right',

    }
    return (

        < Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <CssBaseline />
            <AppBar
                style={{ background: '#fff', boxShadow: 'none' }}
                sx={{
                    width: { sm: `100 % ` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>

                    <div>
                        <NavLink to="/home">
                            <div className="flex-display">
                                <div>
                                    <img width="70px" src={logo} alt="logo" />
                                </div>
                                <div>
                                    <h1 className="logo-text"> Home<span>Tex</span></h1>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div style={rightAlign}>
                        <div className="navigate">
                            <Navigation></Navigation>
                        </div>

                    </div>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon style={{ color: 'black' }} />
                    </IconButton>
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
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
            </Box>
        </Box >
    );
}

Navbar.propTypes = {
    window: PropTypes.func,

};

export default Navbar;