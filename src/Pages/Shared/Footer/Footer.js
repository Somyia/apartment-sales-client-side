import { Box, Grid, Typography, Container, Button } from '@mui/material';
import logo from '../../../logo.png';
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <Box className="footer-area">
            <Container sx={{ py: 8 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <div className="flex-display">
                            <div>
                                <img width="70px" src={logo} alt="logo" />
                            </div>
                            <div>
                                <Typography component="h1" className="logo-text"> Home<span>Tex</span></Typography>

                            </div>
                        </div>
                        <Typography className="footer-text" component="p">HomeTex is committed to ensuring digital accessibility for individuals with disabilities.  We are continuously working to improve the accessibility of our web experience for everyone,  and we welcome feedback and accommodation requests. If you wish to report an issue or seek an  accommodation</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div>
                            <Typography className="footer-heading" component="h3"> Neibourhood</Typography>
                            <nav aria-label="main mailbox folders">
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon className="footer-icon">
                                                <i className="fas fa-utensils"></i>
                                            </ListItemIcon>
                                            <ListItemText className="footer-icon-text" primary="Blue Flower Restaurant" secondary="243 Ibis Blvd" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon className="footer-icon">
                                                <i className="fas fa-shopping-bag"></i>
                                            </ListItemIcon>
                                            <ListItemText className="footer-icon-text" primary="Public Super Market" secondary="10130 Northlake Blvd" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon className="footer-icon">
                                                <i className="fas fa-school"></i>
                                            </ListItemIcon>
                                            <ListItemText className="footer-icon-text" primary="J.F. K. Primary School " secondary="8246 Quail Meadow Way" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon className="footer-icon">
                                                <i className="fas fa-plane-departure"></i>
                                            </ListItemIcon>
                                            <ListItemText className="footer-icon-text" primary="Palm Beach Airport" secondary="8523 Egret Meadow Ln" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </nav>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div>
                            <Typography className="footer-heading" component="h3"> Contacts</Typography>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon className="footer-icon">
                                            <i className="far fa-clock"></i>
                                        </ListItemIcon>
                                        <ListItemText className="footer-icon-text" primary="Open House" secondary="January 5th 2021, 12pm" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon className="footer-icon">
                                            <i className="fas fa-phone-alt"></i>
                                        </ListItemIcon>
                                        <ListItemText className="footer-icon-text" primary="Call Us Now" secondary="0800-123-45678" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon className="footer-icon">
                                            <i className="fas fa-envelope-open-text"></i>
                                        </ListItemIcon>
                                        <ListItemText className="footer-icon-text" primary="Email Us " secondary="email@hometex.com" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </div>
                    </Grid>

                </Grid>

            </Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} style={{ textAlign: 'center' }}>
                    <div className="footer-bottom">
                        <Typography component="small"> copyright by hometex 2021</Typography>
                    </div>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Footer;