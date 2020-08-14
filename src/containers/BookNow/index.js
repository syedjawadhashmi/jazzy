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
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import PeopleIcon from '@material-ui/icons/People';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import clsx from 'clsx';

var Element = Scroll.Element;
var Link = Scroll.Link;


const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        width: '100%',
        textAlign: 'left',
        backgroundColor: 'transparent',
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);


class BookNow extends Component {
    state = {
        value: 'step1',
        serviceType: 10,
        selectedDate: '2014-08-18T21:11:54'
    }

    handleChange = (event) => {
        this.setState({ value: (event.target).value });
    };

    handleDateChange = (date) => {
        this.setState({ selectedDate: date });
    };

    passengers = (placeholder) => {
        const { classes } = this.props;
        return (
            <div className={classes.passengers}>
                <InputLabel id="demo-controlled-open-select-label">{placeholder}</InputLabel>
                <div className={classes.passengersDiv}>
                    <PeopleIcon className={classes.passengersBorder} />
                    <Button className={classes.iconButton} startIcon={<RemoveIcon className={classes.passengersBorder} />} />
                    <Input disableUnderline className={clsx(classes.passengersInput, classes.passengersBorder)} />
                    <Button className={classes.iconButton} startIcon={<AddIcon className={classes.passengersBorder} />} />
                </div>
            </div>
        )
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
                                    <h2 className={classes.secondaryText}>BOOK NOW</h2>
                                </Grid>
                            </Grid>
                            <img alt="Lintax" className={classes.bgHome} src={require('../../assets/bg.jpg')} />
                        </Grid>
                    </Element>
                    <Element className={classes.bookNowSecond} name="second">
                        <Grid className={classes.overlayBookNow}>
                            <Grid className={classes.bookGrey}>
                                <Grid className={classes.rowBetween}>
                                    <p>New Reservation</p>
                                    <p>Login</p>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <Accordion elevation={0} className={classes.accordion}>
                                        <AccordionSummary
                                            style={{ height: 40 }}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <FormControl component="fieldset">
                                                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={this.handleChange}>
                                                    <FormControlLabel style={{ marginBottom: 0 }} value="step1" control={<Radio color="primary" />} label="Step 1 Ride Info" />
                                                </RadioGroup>
                                            </FormControl>
                                        </AccordionSummary>
                                        <AccordionDetails className={classes.accordionDetail}>
                                            <Grid container item xs={12} sm={12} md={12}>
                                                <Grid item xs={12} sm={12} md={6} className={classes.accordionLeft}>
                                                    <InputLabel id="demo-controlled-open-select-label">Select Service Type</InputLabel>
                                                    <FormControl className={classes.select}>
                                                        <Select
                                                            labelId="demo-controlled-open-select-label"
                                                            id="demo-customized-select"
                                                            value={this.state.serviceType}
                                                            className={classes.textField}
                                                            onChange={this.handleChange}
                                                            input={<BootstrapInput />}
                                                        >
                                                            <MenuItem value="">
                                                                <em>None</em>
                                                            </MenuItem>
                                                            <MenuItem value={10}>Airport Pickup</MenuItem>
                                                            <MenuItem value={20}>Transfer/P2P</MenuItem>
                                                            <MenuItem value={30}>Airport Dropoff</MenuItem>
                                                            <MenuItem value={40}>Hourly/As Directed</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    <form className={classes.datecontainer} noValidate>
                                                        {/* <FormControl> */}
                                                        <TextField
                                                            id="datetime-local"
                                                            // label="Pick-Up Date"
                                                            type="date"
                                                            // style={{ width: '60%' }}
                                                            defaultValue="2017-05-24T10:30"
                                                            className={classes.textField}
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                            style={{ width: '60%' }}
                                                            variant="outlined"
                                                        />
                                                        {/* </FormControl> */}
                                                        <TextField
                                                            id="datetime-local"
                                                            // label="Pick-Up Time"
                                                            type="time"
                                                            variant="outlined"
                                                            style={{ width: '35%' }}
                                                            defaultValue="2017-05-24T10:30"
                                                            className={classes.textField}
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                        />
                                                    </form>
                                                    <div className={classes.inputMargin}>
                                                        <InputLabel id="demo-controlled-open-select-label">Pick-Up Location</InputLabel>
                                                        <TextField
                                                            label=""
                                                            id="outlined-size-small"
                                                            defaultValue=""
                                                            className={classes.textField}
                                                            variant="outlined"
                                                            size="small"
                                                        />
                                                    </div>
                                                    <div className={classes.inputMargin}>
                                                        <InputLabel id="demo-controlled-open-select-label">Drop-Off Location</InputLabel>
                                                        <TextField
                                                            label=""
                                                            id="outlined-size-small"
                                                            defaultValue=""
                                                            className={classes.textField}
                                                            variant="outlined"
                                                            size="small"
                                                        />
                                                    </div>
                                                    <Grid container xs={11} md={11}  >
                                                        <Grid item sm={12} md={6} >
                                                            {this.passengers('Number of Passengers')}
                                                        </Grid>
                                                        <Grid item sm={12} md={6}>
                                                            {this.passengers('Luggage Count')}
                                                        </Grid>
                                                    </Grid>
                                                    <Button color="primary" variant="contained" className={classes.vihicleButton}>Select Vihicle</Button>
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={6}>
                                                    <img className={classes.bookMap} src={require('../../assets/map.jpg')} />
                                                </Grid>
                                            </Grid>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion elevation={0} className={classes.accordion}>
                                        <AccordionSummary
                                            style={{ height: 40 }}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <FormControl component="fieldset">
                                                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={this.handleChange}>
                                                    <FormControlLabel style={{ marginBottom: 0 }} value="step2" control={<Radio color="primary" />} label="Step 2: Select Vehicle" />
                                                </RadioGroup>
                                            </FormControl>
                                        </AccordionSummary>
                                        <AccordionDetails className={classes.accordionDetail}>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                                sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion elevation={0} className={classes.accordion}>
                                        <AccordionSummary
                                            style={{ height: 40 }}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <FormControl component="fieldset">
                                                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={this.handleChange}>
                                                    <FormControlLabel style={{ marginBottom: 0 }} value="step3" control={<Radio color="primary" />} label="Step 3: Final Details" />
                                                </RadioGroup>
                                            </FormControl>
                                        </AccordionSummary>
                                        <AccordionDetails className={classes.accordionDetail}>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                                sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Grid sm={12} >
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Element>
                </div>
            </Layout>
        );
    }
}

export default withStyles(styles)(BookNow);