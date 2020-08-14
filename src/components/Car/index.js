import React, { Component } from "react";
import {
    Grid,
    Paper,
    CardContent,
    CardMedia,
    Typography,
    Button,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { styles } from '../../styles'
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

const Card = ({ classes, image, name, designation, description, description1, description2, description3 }) => {
    return (
        <Paper elevation={0} className={classes.carroot}>
            <Grid>
                <Grid
                    style={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                        zIndex: 1,
                    }}
                >
                    <CardMedia

                        // imageUrl={image}
                        title="Contemplative Reptile"
                    >
                        <img className={classes.carmedia} src={image} />
                    </CardMedia>
                </Grid>
                <CardContent
                    style={{
                        alignItems: "flex-start",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: 'center'
                    }}
                >
                    <Typography className={classes.carname} gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography
                        className={classes.cardesignation}
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {designation}
                    </Typography>
                    <div style={{ marginLeft: 30 }}>
                        <Typography
                            className={classes.carcardText}
                            variant="body2"
                            style={{ textAlign: "left" }}
                            color="textSecondary"
                            component="p"
                        >
                            {description}
                        </Typography>
                        <Typography
                            className={classes.carcardText}
                            variant="body2"
                            style={{ textAlign: "left" }}
                            color="textSecondary"
                            component="p"
                        >
                            {description1}
                        </Typography>
                        <Typography
                            className={classes.carcardText}
                            variant="body2"
                            style={{ textAlign: "left" }}
                            color="textSecondary"
                            component="p"
                        >
                            {description2}
                        </Typography>
                        <Typography
                            className={classes.carcardText}
                            variant="body2"
                            style={{ textAlign: "left" }}
                            color="textSecondary"
                            component="p"
                        >
                            {description3}
                        </Typography>
                    </div>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                        <Button color="primary" variant="contained">View Details</Button>
                        <div style={{ alignItems: 'center', display: 'flex' }}>
                            <LocalOfferIcon className={classes.cartag} /><span className={classes.carprice}>$75 <span className={classes.hourText}>/ HOUR</span></span>
                        </div>
                    </div>
                </CardContent>
            </Grid>
        </Paper>
    );
};
class Car extends Component {
    render() {
        const { classes } = this.props
        return (
            <Grid>
                <div className={classes.cardonorArea}>
                    <div className={classes.cardonate}>
                        <Grid
                            container
                            style={{
                                width: "100%",
                                flexDirection: "row",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Grid item md={4}>
                                <Card
                                    classes={classes}
                                    image="https://i1.wp.com/jazzytransportation.com/wp-content/uploads/2020/02/SUV.jpg?fit=600%2C340&ssl=1"
                                    name={"SUV"}
                                    description={"7 passengers"}
                                    description1={"Tinted Privacy Glass"}
                                    description2={"Premium Leather Interior"}
                                    description3={"Power fold second and third-row seats"}
                                />
                            </Grid>
                            <Grid item md={4}>
                                <Card
                                    classes={classes}
                                    image="https://i2.wp.com/jazzytransportation.com/wp-content/uploads/2020/02/Premium-Sedan.jpg?fit=600%2C340&ssl=1"
                                    name={"PREMIUM SEDAN"}
                                    description={"7 passengers"}
                                    description1={"Tinted Privacy Glass"}
                                    description2={"Premium Leather Interior"}
                                    description3={"Power fold second and third-row seats"}
                                />
                            </Grid>
                            <Grid item md={4}>
                                <Card
                                    classes={classes}
                                    image="https://i1.wp.com/jazzytransportation.com/wp-content/uploads/2015/11/Sedan.jpg?fit=600%2C340&ssl=1"
                                    name={"SEDAN"}
                                    description={"7 passengers"}
                                    description1={"Tinted Privacy Glass"}
                                    description2={"Premium Leather Interior"}
                                    description3={"Power fold second and third-row seats"}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            style={{
                                width: "100%",
                                flexDirection: "row",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Grid item md={4}>
                                <Card
                                    classes={classes}
                                    image="https://i2.wp.com/jazzytransportation.com/wp-content/uploads/2015/11/Premium-SUV.jpg?fit=600%2C340&ssl=1"
                                    name={"PREMIUM SUV"}
                                    description={"7 passengers"}
                                    description1={"Tinted Privacy Glass"}
                                    description2={"Premium Leather Interior"}
                                    description3={"Power fold second and third-row seats"}
                                />
                            </Grid>
                            <Grid item md={4}></Grid>
                            <Grid item md={4}></Grid>
                        </Grid>
                    </div>
                </div>
            </Grid>
        );
    }
}

export default withStyles(styles)(Car)