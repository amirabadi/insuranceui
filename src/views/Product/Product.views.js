import React, {Component, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Master from "../../layout/Master/Master.layout";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import img3 from "../../static/img/img(3).jpg";
import {ProductMock} from "../../mock/Product.mock";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    }
}));

const Product = () => {
    const jsClasses = useStyles();
    const params = useParams();
    const [state, setState] = useState({});

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        loadData(params.id);
    }, [])

    const loadData = (id) => {
        const product = ProductMock.filter(x => x.id == id)[0];
        setState(product);
    }

    return (
        <Master title='Home Page'>
            <section>
                <Grid container spacing={2} justify="center">
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader />
                            <CardActionArea>
                                <CardMedia
                                    className={jsClasses.media}
                                    image={state.fileImage}
                                    title={state.title}
                                />
                                <CardContent>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Typography variant="body2" color="textSecondary" component="h1">
                                    {state.title}
                                </Typography>
                                <br />
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {state.description}
                                </Typography>
                                <br />
                                <Typography variant="body2" color="textSecondary" component="span">
                                    {state.price}
                                </Typography>
                                <Button onClick={handleClickOpen} color="primary" autoFocus>
                                    افزوردن به سبد
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </section>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"به  سبد اضافه شود؟"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        متن نمونه
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        کنسل
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        تایید
                    </Button>
                </DialogActions>
            </Dialog>
        </Master>
    )
}

export default Product;