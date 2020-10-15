import React, {Component} from 'react';
import './Home.scss';
import {useHistory} from 'react-router';
import Master from "../../layout/Master/Master.layout";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import classes from './Home.scss';
import {ProductMock} from "../../mock/Product.mock";
import CardView from "../../shared/component/CardView/CardView.component";

const Home = () => {
    const history = useHistory();
    const initialState = {
        articles: []
    };

    function onGoto() {
        const res = window.confirm('Are you sure?');
        if (res) {
            history.push('/about');
        }
    }
function a(){
        h();
}
    function h(state = initialState) {
        return Object.assign({}, state, {
            articles: state.articles.concat('i')
        });
    }

    return (

        <Master title='Home Page'>
            <section className={classes.Home}>

                <Button onClick={a}>adrfgsdrg</Button>
                {/* <Grid container spacing={2}>
                    {
                        ProductMock.map((item, index) => (
                            <Grid item xs={3} key={index}>
                                <CardView data={item} />
                            </Grid>
                        ))
                    }
                </Grid>

                <hr />

                <Button variant="contained" color="primary" onClick={onGoto}>
                    Goto About
                </Button>
                <Link to='/about'>Go To About</Link>*/}
            </section>
        </Master>
    )
}

export default Home;