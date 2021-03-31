import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Link } from "@material-ui/core";
import classNames from 'classnames'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 30,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderTop: 'solid 3px #998643',
        paddingTop: '16px',
        overflowX: 'hidden'
    },
    footerSections: {
        margin: '0 16px'
    },
    subFooter: {
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        padding: '8px 16px 8px 16px',
        marginTop: '8px'
    },
    footerText: {
        color: '#fff',
        fontSize: '18px',
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
        <Grid
        container
        spacing={0}
        className={classNames(classes.footerText, classes.footerSections)}
        >
        <Grid item xs={12} sm={4}>
            <div vocab="http://schema.org/" typeof="Organization">
            <span property="name">Digital Crafts Inc.</span>
            <div property="address" typeof="PostalAddress">
            <span property="streetAddress">101010 Coder Cookie St.</span>
            <span property="addressLocality" style={{ display: 'block' }}>
                Atlanta, Georgia{' '}
            </span>
            <span property="postalCode">77450</span>
            </div>
            <span property="telephone">(740) 283-3771</span>
            </div>
        </Grid>
        <Grid item xs={12} sm={4}>
            <Grid container>
            <Grid
                className={classes.flexContainer}
                style={{ justifyContent: 'center' }}
                item
                xs={12}
            >
            </Grid>
            <Grid
                className={classes.flexContainer}
                style={{ justifyContent: 'flex-end' }}
                item
                xs={6}
            >
                Apply
            </Grid>
            <Grid className={classes.flexContainer} item xs={6}>
            </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
            <ul style={{ listStyle: 'none', margin: 0 }}>
            <li>
                <Link
                prefetch={true}
                as="/contact"
                href="/page?type=aboutPages&id=contact"
                >
                <a className={classes.white} style={{ fontWeight: 400 }}>
                    Contact
                </a>
                </Link>
            </li>
            <li>
                <Link
                prefetch={true}
                as="/ferpa"
                href="/page?type=aboutPages&id=ferpa"
                >
                <a className={classes.white} style={{ fontWeight: 400 }}>
                    Privacy Policy
                </a>
                </Link>
            </li>
            <li>
                <Link
                prefetch={true}
                as="/directions-and-attractions"
                href="/page?type=aboutPages&id=directions-and-attractions"
                >
                <a className={classes.white} style={{ fontWeight: 400 }}>
                    Directions
                </a>
                </Link>
            </li>
            <li>
                <Link
                prefetch={true}
                as="/consumer-information/non-discrimination/"
                href="/page?type=aboutPages&id=non-discrimination"
                >
                <a className={classes.white} style={{ fontWeight: 400 }}>
                    Nondiscrimination Statement
                </a>
                </Link>
            </li>
            <li>
                <Link
                prefetch={true}
                as="/consumer-information"
                href="/page?type=aboutPages&id=consumer-information"
                >
                <a className={classes.white} style={{ fontWeight: 400 }}>
                    Consumer Information
                </a>
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
            © {currentYear} Digital Crafts Inc.
        </Typography>
        </Grid>
    </div>
    )
}