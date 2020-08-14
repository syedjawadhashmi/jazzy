import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import { Header, Footer } from '../../components';
import { styles } from '../../styles'

class Layout extends Component {
    render() {
        const { classes, children } = this.props;

        return (
            <Fragment>
                <Header />
                <div className={classes.toolbar} />
                <div className={classes.root}>
                    <CssBaseline />
                    {children}
                </div>
                <Footer />
            </Fragment>
        );
    }
}

export default withStyles(styles)(Layout);
