import React, {Component} from 'react';
import './CardView.scss';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import classes from './CardView.scss';
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    }
}));

const CardView = ({data}) => {
    const jsClasses = useStyles();

    return (
        <Link to={`/product/${data.id}`} className={classes.CardView}>
            <Card>
                <CardHeader />
                <CardActionArea>
                    <CardMedia
                        className={jsClasses.media}
                        image={data.fileImage}
                        title={data.title}
                    />
                    <CardContent>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Typography variant="body2" color="textSecondary" component="h2">
                        {data.title}
                    </Typography>
                </CardActions>
            </Card>
        </Link>
    )
}

export default CardView;