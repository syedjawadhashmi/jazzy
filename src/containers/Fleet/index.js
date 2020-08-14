import React, { Component } from 'react';
import {
    Layout
} from '..';
import {
    Grid,
    withStyles,
    Button,
    Input
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { styles } from '../../styles'
import Scroll from 'react-scroll';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import { Car } from "../../components";
var Element = Scroll.Element;
var Link = Scroll.Link;


class Fleet extends Component {
    state = {
    }

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <Layout>
                <div className={classes.fullWidth}>
                    <Element name="first">
                        <Grid className={classes.homeGrid}>
                            <Grid xs={12} className={classes.textSection}>
                                <Grid xs={8} className={classes.textSectionGrid}>
                                    <Link to="second" spy={true} smooth={true} duration={1500}>
                                        <KeyboardArrowDownIcon className={classes.arrowDown} />
                                    </Link>
                                    <h2 className={classes.secondaryText}>OUR FLEET</h2>
                                    <div className={classes.carDiv}>
                                        <span className={classes.secondaryText}>_____________</span>
                                        <DriveEtaIcon className={classes.carIcon} />
                                        <span className={classes.secondaryText}>_____________</span>
                                    </div>
                                    <p className={classes.secondaryText}>We offer you a super VIP experience all throughout New Orleans</p>
                                </Grid>
                            </Grid>
                            <img alt="Lintax" className={classes.bgHome} src={require('../../assets/bg.jpg')} />
                        </Grid>
                    </Element>
                    <Element className={classes.fleetSecond} name="second">
                        <Grid style={{ paddingTop: 30 }}>
                            <span style={{ fontSize: 16, margin: 10 }}>ALL</span>
                            <span style={{ fontSize: 16, margin: 10 }}>/</span>
                            <span style={{ fontSize: 16, margin: 10 }}>SEDAN</span>
                            <span style={{ fontSize: 16, margin: 10 }}>/</span>
                            <span style={{ fontSize: 16, margin: 10 }}>SUV</span>
                        </Grid>
                        <Car />

                    </Element>
                </div>
            </Layout>
        );
    }
}

export default withStyles(styles)(Fleet);