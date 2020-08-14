import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles } from '@material-ui/core/styles';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import { styles } from '../../styles';
import Grid from "@material-ui/core/Grid";
import clsx from 'clsx';
import { Link } from "react-router-dom";
import Lintax from '../../assets/logo.png'

class Footer extends React.Component {

    state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
        anchorEl1: null
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.footerDiv}>
                <div className={classes.footer}>
                    <Grid
                        container
                        style={{ width: '100%' }}
                        classes={{
                            root: classes.footerGrid
                        }}
                    >
                        <Grid item xs={12} sm={12} md={3} lg={3} style={{ textAlign: 'left' }}>
                            <Grid item container direction="column" className={classes.footerdividerhorizotal} spacing={1}>
                                <Grid item xs={12} sm={7}>
                                    <Typography variant="subtitle1" className={classes.primaryText} style={{ fontSize: 20 }}>
                                        Lorem Ipsum
                                    </Typography>
                                </Grid>
                                <Grid item className={classes.buttonGrid}>
                                    <Grid item className={classes.footerSignupGrid}>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            component={Link}
                                            to={`/signup`}
                                            variant="contained"
                                            className={classes.footerSignupButton}
                                        >
                                            Sign Up
                                            </Button>
                                    </Grid>
                                    <Grid item className={classes.footerSignupGrid}>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            component={Link}
                                            to={`/login`}
                                            variant="contained"
                                            className={classes.footerLoginButton}
                                        >
                                            Login
                                            </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3} style={{ textAlign: 'left' }}>
                            <Grid item container direction="column" spacing={1}>
                                <Grid item>
                                    <Typography variant="subtitle1" className={classes.primaryText} style={{ fontSize: 20 }}>
                                    Lorem Ipsum
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Link className={classes.loginFooter} to={"/support"} >Lorem Ipsum</Link>
                                </Grid>
                                <Grid item>
                                    <Link className={classes.loginFooter} to="/account-management">Lorem Ipsum</Link>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.loginFooter} to="/terms">Lorem Ipsum</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.loginFooter} to="/terms">Lorem Ipsum</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.loginFooter} to="/terms">Lorem Ipsum</Typography>
                                </Grid>
                                <Grid item>
                                    <Link className={classes.loginFooter} to="/security">Lorem Ipsum</Link>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.loginFooter} to="/terms">Lorem Ipsum</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3} style={{ textAlign: 'left' }}>
                            <Grid item container direction="column" spacing={1}>
                                <Grid item>
                                    <Typography variant="subtitle1" className={classes.primaryText} style={{ fontSize: 20 }}>
                                    Lorem Ipsum
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <a className={clsx(classes.loginFooter)} href={`/faq`} target="blank" rel="noopener noreferrer" >Lorem Ipsum</a>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" className={classes.primaryText} style={{ fontSize: 20, marginTop: 20 }}>
                                    Lorem Ipsum
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <span className={clsx(classes.loginFooter)}>Lorem Ipsum</span>
                                </Grid>
                                <Grid item>
                                    <span className={clsx(classes.loginFooter)}>Lorem Ipsum</span>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3} style={{ textAlign: 'left' }}>
                            <Grid item container direction="column" spacing={1}>
                                <Grid item>
                                    <Typography variant="subtitle1" className={classes.primaryText} style={{ fontSize: 20 }}>
                                        Lintax
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <span className={clsx(classes.loginFooter)}>Lorem Ipsum</span>
                                </Grid>
                                <Grid item>
                                    <span className={clsx(classes.loginFooter)}>Lorem Ipsum</span>
                                </Grid>
                                <Grid item>
                                    <span className={clsx(classes.loginFooter)}>Lorem Ipsum</span>
                                </Grid>
                                <Grid item>
                                    <span className={clsx(classes.loginFooter)}>Lorem Ipsum</span>
                                </Grid>
                                <Grid item>
                                    <span className={clsx(classes.loginFooter)}>Lorem Ipsum</span>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.footerdivider}></div>
                <Grid container item direction="row" style={{ marginBottom: 70, marginTop: 0 }} xs={10} md={10}>
                    <Grid item style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center' }} xs={12} md={5}>
                        <img width="40px" height="40px" alt="logo" src={Lintax} />
                        <div className={classes.socialIcons}>
                            <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/LinDotTax">
                                <TwitterIcon className={classes.socialIcon} />
                            </a>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/lintaxexchange">
                                <FacebookIcon className={classes.socialIcon} />
                            </a>
                            <a rel="noopener noreferrer" target="_blank" href="https://t.me/lintaxexchangeofficial">
                                <TelegramIcon className={classes.socialIcon} />
                            </a>
                        </div>
                    </Grid>
                    <Grid item container alignItems="center" xs={false} md={1} />
                    <Grid item container alignItems="center" xs={12} md={6}>
                        <Grid item style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'flex-end' }} xs={12} md={12}>
                            <Grid item>
                                <Typography className={classes.primaryText} variant="subtitle1" style={{ fontSize: 11, textAlign: 'left' }}>
                                    © <span className={classes.primaryNumber}>2017-2020</span> LOREM IPSUM
                            </Typography>
                                <Grid item>
                                    <Link className={classes.loginFooter} style={{ fontSize: 11, textDecoration: 'underline' }} to="/terms">Privacy Notice</Link>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Link className={classes.loginFooter} style={{ fontSize: 11, textDecoration: 'underline' }} to="/terms">Terms of Service</Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}


export default withStyles(styles)(Footer);