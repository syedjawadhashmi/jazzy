import React, { Component } from 'react';
import {
    Layout
} from '../../containers';
import {
    Grid,
    withStyles
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { styles } from '../../styles'
import Scroll from 'react-scroll';

var Element = Scroll.Element;
var Link = Scroll.Link;

class Home extends Component {

    render() {
        const { classes } = this.props;
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
                                    <h2 className={classes.secondaryText}>Lorem ipsum</h2>
                                    <p className={classes.secondaryText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </Grid>
                            </Grid>
                            <img alt="Lintax" className={classes.bgHome} src={require('../../assets/bg.jpg')} />
                        </Grid>
                    </Element>
                    <Element name="second">
                        <Grid className={classes.homeGrid}>
                            <Grid xs={12} className={classes.textSection}>
                                <Grid xs={8} >
                                    <h3 className={classes.secondaryText}>Lorem ipsum</h3>
                                    <p className={classes.secondaryText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </Grid>
                            </Grid>
                            <img alt="Lintax" className={classes.bgHome} src={require('../../assets/bg.jpg')} />
                        </Grid>
                    </Element>
                </div>
            </Layout>
        );
    }
}

export default withStyles(styles)(Home);