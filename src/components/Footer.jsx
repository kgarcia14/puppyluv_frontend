import React from 'react';
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Link } from "@material-ui/core";
import classNames from 'classnames'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles((theme) => ({
    root: {
        overflowX: 'hidden',
        fontFamily: 'Cabin',
        fontSize: '10px',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
    },
    footerSections: {
        margin: '0 16px',
    },
    subFooter: {
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        padding: '8px 16px 8px 16px',
        marginTop: '10px'
    },
    footerText: {
        color: '#fff',
        fontSize: '14px',
        lineHeight: 1.5
    },
    invertedBtnDark: {
        color: '#fff',
        backgroundColor: 'transparent',
        border: '2px #fff solid',
        boxShadow: 'none',
        margin: '8px'
    },
    white: {
        color: '#ffffff'
    },
    flexContainer: {
        display: 'flex'
    },
    sectionDesktop: {
        paddingTop: '12px',
        borderTop: 'solid 3px #998643',
        display: 'none',
        backgroundColor: 'rgba(0,0,0,0.5)',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        },
    },
    sectionMobile: {
        display: 'flex',
        backgroundColor: 'transparent',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    bottomNav: {
        backgroundColor: "transparent",
        width: '100%',
    }
}));

export default function Footer() {
    const classes = useStyles();
    const currentYear = new Date().getFullYear()
    const [value, setValue] = React.useState(0);
    const { isAuthenticated } = useAuth0();
    const history = useHistory();

    return (
        <div className={classes.root} position="static" sticky="bottom">
            <div className={classes.sectionDesktop}>
                <Grid container spacing={0} className={classNames(classes.footerText, classes.footerSections)}>
                    <Grid item xs>
                        <div>
                            <span property="name">Puppy Luv Inc.</span>
                            <div property="address" typeof="PostalAddress">
                                <span property="streetAddress">10101 Cookie Coder St.</span>
                                <span property="addressLocality" style={{ display: 'block' }}>Atlanta, Georgia{''}</span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs>
                        <ul style={{ listStyle: 'none', margin: 0 }}>
                            <li>
                                <Link prefetch={true} as="/github"
                                    href="https://github.com/kgarcia14/puppyluv_frontend">
                                    <a href="#" className={classes.white} style={{ fontWeight: 400 }}>GitHub</a>
                                </Link>
                            </li>
                            <li>
                                <Link prefetch={true} as="/thewriteupthingamajiggg"
                                    href="/page?type=aboutPages&id=ferpa">
                                    <a href="#" className={classes.white} style={{ fontWeight: 400 }}>Documentation</a>
                                </Link>
                            </li>
                            <li>
                                <Link prefetch={true} as="/directions-and-attractions"
                                    href="/page?type=aboutPages&id=directions-and-attractions">
                                    <a href="#" className={classes.white} style={{ fontWeight: 400 }}>About Us</a>
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                </Grid>

                <Grid className={classes.subFooter} item xs={12}>
                <Typography
                    className={classes.white}
                    variant="subheading"
                    component={'span'}
                >
                    © {currentYear} PuppyLuv Inc.
                </Typography>
                </Grid>
            </div>

            {isAuthenticated ? (
            <div className={classes.sectionMobile}>
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                    className={classes.bottomNav}
                >
                    <BottomNavigationAction label="Back" onClick={() => history.goBack()} icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Favorites" onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '/my_favorites';
                        }} icon={<FavoriteIcon color="secondary"/>} />
                    <BottomNavigationAction label="Nearby Parks" onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '/nearbyparks';
                        }} icon={<LocationOnIcon color="primary"/>} />
                </BottomNavigation>
            </div>
            ) : (
            <>
            </>
            )}
            </div>
    )
}
