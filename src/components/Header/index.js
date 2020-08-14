/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import BackIcon from '@material-ui/icons/ArrowBack';
import Hidden from '@material-ui/core/Hidden';
import MoreIcon from '@material-ui/icons/MoreVert';
import { styles } from '../../styles'
import Lintax from '../../assets/logo.png'

class NavBar extends Component {
    state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
    };

    componentDidMount() {
    }

    handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null })
    }

    handleMobileMenuOpen = (event) => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget })
    }

    render() {
        const { classes } = this.props;
        const { mobileMoreAnchorEl, menuAnchorEl } = this.state;

        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

        const mobileMenuId = 'primary-search-account-menu-mobile';

        const renderMobileMenu = (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={mobileMenuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={this.handleMobileMenuClose}
                classes={{
                    paper: classes.mobileMenuPaper
                }}
            >

                <MenuItem onClick={this.handleMobileMenuClose} component={Link} to={`/`}>
                    <p className={classes.primaryText} style={{ paddingRight: 12 }}>Home</p>
                </MenuItem>

                <MenuItem onClick={this.handleMobileMenuClose} component={Link} to="/book-now">
                    <p className={classes.primaryText} style={{ paddingRight: 12 }}>Book Now</p>
                </MenuItem>


                <MenuItem onClick={this.handleMobileMenuClose} component={Link} to="/fleet">
                    <p className={classes.primaryText} style={{ paddingRight: 12 }}>Fleet</p>
                </MenuItem>

                <MenuItem onClick={this.handleMobileMenuClose} component={Link} to={'/'}>
                    <p className={classes.primaryText} style={{ paddingRight: 12 }}>Profile</p>
                </MenuItem>

                <MenuItem onClick={this.handleMobileMenuClose} component={Link} to="/">
                    <p className={classes.primaryText} style={{ paddingRight: 12 }}>Contact</p>
                </MenuItem>

                <MenuItem onClick={this.handleMobileMenuClose} component={Link} to="/">
                    <p className={classes.primaryText} style={{ paddingRight: 12 }}>Help</p>
                </MenuItem>

                <MenuItem>
                    <p className={classes.primaryText} style={{ paddingRight: 12 }}>Logout</p>
                </MenuItem>

            </Menu>
        );

        const menuButton = (
            // <IconButton
            //     color="inherit"
            //     aria-label="Menu"
            //     className={classes.hoverTransparent}
            //     aria-owns={menuAnchorEl ? 'nav-menu' : undefined}
            //     aria-haspopup="true"
            //     // onClick={() => this.props.history.push('/')}
            // >
                <img alt="Lintax" className={classes.logoHeight} src={Lintax} />
            // </IconButton>
        );
        let value = 0;
        return (
            <div>
                <AppBar className={classes.appBar} position="fixed">
                    <Toolbar className={classes.Toolbar}>
                        <Hidden smDown implementation="css">
                        <div className={classes.grow} />
                            {menuButton}
                        </Hidden>

                        <Hidden smDown implementation="js">
                            <Tabs indicatorColor="secondary"
                                value={value}
                                classes={{
                                    flexContainer: classes.tabsFlexContainer,
                                    root: classes.antTabsRoot,
                                    indicator: classes.navTabsIndicator
                                }}>

                                <Tab
                                    label={'Home'}
                                    component={Link}
                                    to={'/'}
                                    classes={{
                                        root: classes.navTabRoot,
                                        selected: classes.tabActive
                                    }}
                                />

                                <Tab
                                    label={'Book Now'}
                                    component={Link}
                                    to="/book-now"
                                    classes={{
                                        root: classes.navTabRoot,
                                        selected: classes.tabActive
                                    }}
                                />

                                <Tab
                                    label={'Fleet'}
                                    component={Link}
                                    to={`/fleet`}
                                    classes={{
                                        root: classes.navTabRoot,
                                        selected: classes.tabActive
                                    }}
                                />

                                <Tab
                                    label={'Profile'}
                                    component={Link}
                                    to={`/`}
                                    classes={{
                                        root: classes.navTabRoot,
                                        selected: classes.tabActive
                                    }}
                                />

                                <Tab
                                    label={'Contact'}
                                    component={Link}
                                    to="/"
                                    classes={{
                                        root: classes.navTabRoot,
                                        selected: classes.tabActive
                                    }}
                                />
                                <Tab
                                    label={'Help'}
                                    component={Link}
                                    to="/"
                                    classes={{
                                        root: classes.navTabRoot,
                                        selected: classes.tabActive
                                    }}
                                />

                                <Tab
                                    label={'Logout'}
                                    onClick={this.logoutUser}
                                    classes={{
                                        root: classes.navTabRoot,
                                        selected: classes.tabActive
                                    }}
                                />
                            </Tabs>
                        </Hidden>

                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={this.handleMobileMenuOpen}
                            >
                                <MoreIcon className={classes.moreOption} />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>

                {renderMobileMenu}

            </div>
        );
    }
}


export default withStyles(styles)(NavBar);
