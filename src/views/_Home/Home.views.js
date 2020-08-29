import React, {Component} from 'react';
import './Home.scss';
import Master from "../../layout/Master/Master.layout";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}))

const Home = () => {
    const classes = useStyles();


    return (
        <Master title='Home Page'>
            <section className='Home'>
                <h2 className='Subject'>
                    <span className='SubjectText'>My home page</span>
                    <span className='SubjectIcon'><i className="feather icon-aperture"></i></span>
                    <Button variant="contained" color="primary">
                        Hello World
                    </Button>
                    <Button variant="contained" color="secondary">
                        Secondary
                    </Button>
                </h2>
                <br />

                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>xs=12</Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>xs=6</Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>xs=6</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>xs=3</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>xs=3</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>xs=3</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>xs=3</Paper>
                        </Grid>
                    </Grid>
                </div>
            </section>
        </Master>
    )
}

export default Home;