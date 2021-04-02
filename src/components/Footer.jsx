import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Link } from "@material-ui/core";
import classNames from 'classnames'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 40,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderTop: 'solid 3px #998643',
        paddingTop: '12px',
        overflowX: 'hidden',
        fontFamily: 'Cabin',
        fontSize: '10px',
        bottom: 0,
        width: '100%',  
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
    }
}));

export default function Footer() {
    const classes = useStyles();
    const currentYear = new Date().getFullYear()
    
    return (
    <div className={classes.root}>
    <Grid container spacing={0} className={classNames(classes.footerText, classes.footerSections)}>
        <Grid item xs={12} sm={4}>
            <div>
            <span property="name">Puppy Luv Inc.</span>
            <div property="address" typeof="PostalAddress">
            <span property="streetAddress">10101 Cookie Coder St.</span>
            <span property="addressLocality" style={{ display: 'block' }}>Atlanta, Georgia{''}</span>
            </div>
            </div>
        </Grid>
        <Grid item xs={12} sm={4}>
            <ul style={{ listStyle: 'none', margin: 0 }}>
            <li>
                <Link prefetch={true} as="/github"
                href="https://github.com/kgarcia14/puppyluv_frontend">
                <a className={classes.white} style={{ fontWeight: 400 }}>GitHub</a>
                </Link>
            </li>
            <li>
                <Link prefetch={true} as="/thewriteupthingamajiggg"
                href="/page?type=aboutPages&id=ferpa">
                <a className={classes.white} style={{ fontWeight: 400 }}>Documentation</a>
                </Link>
            </li>
            <li>
                <Link prefetch={true} as="/directions-and-attractions"
                href="/page?type=aboutPages&id=directions-and-attractions">
                <a className={classes.white} style={{ fontWeight: 400 }}>About Us</a>
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
    )
}