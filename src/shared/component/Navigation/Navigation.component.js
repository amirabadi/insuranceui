import React, {Component} from 'react';
import './Navigation.module.scss';
import classes from './Navigation.module.scss';
import Box from "@material-ui/core/Box";
import {NavigationMock} from "../../../mock/Navigation.mock";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from "react-router-dom";


const Navigation = () => {
    return (
        <section className={classes.Navigation}>
            <List>
                {
                    NavigationMock.map((item, index) => (
                        <Link key={index} to={item.link} className={classes.Link}>
                            <ListItem button key={index}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItem>
                        </Link>
                    ))
                }
            </List>

            {/*<div className={classes.Body}>*/}
            {/*    <ul className={classes.Items}>*/}
            {/*        {*/}
            {/*            NavigationMock.map((item, index) => (*/}
            {/*                <li className={classes.Item} key={index}>*/}
            {/*                    <Box className={classes.Content}*/}
            {/*                         component={(item.children) ? 'span' : 'a'}>*/}
            {/*                        {item.title}*/}
            {/*                    </Box>*/}
            {/*                </li>*/}
            {/*            ))*/}
            {/*        }*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </section>
    )
}

export default Navigation;