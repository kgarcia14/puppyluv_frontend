import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Menu, MenuItem } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ForumIcon from '@material-ui/icons/Forum';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import PetsIcon from '@material-ui/icons/Pets';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Tooltip from '@material-ui/core/Tooltip';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './profileStuff/LoginButton';
import LogoutButton from './profileStuff/LogoutButton';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        fontFamily: 'Cabin',
        flexGrow: 1,
        fontColor: '#585459',
        overflow: 'hidden',
        top: '0',
        width: '100vw',
        position: 'fixed',
        zIndex: '500',
    },
    appbar: {
        background: 'white',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    colorText: {
        color: "#FF69B4",
        fontFamily: "Fredoka One",
    },
    puppy: {
        color: "black",
        fontFamily: "Fredoka One",
    },
    luv: {
        color: "#585459",
        fontFamily: 'Cabin',

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },

        
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const { user, isAuthenticated } = useAuth0();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
        >
            <MenuItem 
                className={classes.luv} 
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/my_profile';
            }}>My Profile</MenuItem>
            <MenuItem 
                className={classes.luv} 
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/home';
            }}>Home</MenuItem>
            <MenuItem className={classes.luv} onClick={handleClose}><LogoutButton /></MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem 
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/nearbyparks';
            }}>
                <IconButton color="primary">
                        <LocationOnIcon/>
                </IconButton>
                <p>Nearby Parks</p>
            </MenuItem>
            <MenuItem 
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/my_favorites';
                }}>
                <IconButton color="secondary" >
                        <FavoriteIcon />
                </IconButton>
                <p>Favorites</p>
            </MenuItem>
            <MenuItem onClick={handleMenu}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="primary"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0} position="static" sticky="top">
                <Toolbar>
                    <h5 className={classes.appbarTitle}>
                        <span className={classes.puppy}>Puppy</span><span className={classes.colorText}>Luv.</span>
                        {isAuthenticated ? (
                        <Tooltip title="Home">
                            <IconButton href='/home' color="primary" fontSize="small">
                                <PetsIcon />
                            </IconButton>
                        </Tooltip>
                        ) : (
                        <Tooltip title="Home">
                            <IconButton href='/' color="primary" fontSize="small">
                                <PetsIcon />
                            </IconButton>
                        </Tooltip>
                        )}
                    </h5>
                    {isAuthenticated ? (
                        <div>
                            <div className={classes.sectionDesktop}>
                                <span className={classes.luv}>Logged in as: {user.nickname}</span>
                                <Tooltip 
                                    title="Nearby Parks"  
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = '/nearbyparks';
                                }}>
                                <IconButton color="primary">
                                        <LocationOnIcon/>
                                </IconButton>
                                </Tooltip>
                                <Tooltip 
                                    title="Favorites" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = '/my_favorites';
                                }}>
                                <IconButton color="secondary">
                                    <Badge color="secondary">
                                        <FavoriteIcon />
                                    </Badge>
                                </IconButton>
                                </Tooltip>
                                <Tooltip 
                                    title="Nearby Parks"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = '/nearbyparks';
                                    }}>
                                <IconButton color="primary">
                                    <LocationOnIcon/>
                                </IconButton>
                                </Tooltip>
                                <Tooltip title="My Account" onClick={handleMenu}>
                                <IconButton
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    color="primary"
                                >
                                    <AccountCircle />
                                </IconButton>
                                </Tooltip>
                            </div>
                            <div className={classes.sectionMobile} onClick={handleMobileMenuOpen}>
                                <IconButton
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    color="primary"
                                >
                                    <MenuIcon />
                                </IconButton>
                            </div>

                        </div>
                    ) : (
                        <>
                            <span className={classes.luv}>Have an account? <LoginButton /></span>
                        </>
                    )}
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}

export default Navbar;