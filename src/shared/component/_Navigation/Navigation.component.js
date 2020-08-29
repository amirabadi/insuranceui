import React, {Component} from 'react';
import './Navigation.module.scss';
import classes from './Navigation.module.scss';
import Box from "@material-ui/core/Box";
import {NavigationMock} from "../../../mock/Navigation.mock";


const Navigation = () => {
    // let student = {
    //     firstName: 'Farid',
    //     lastName: 'Karami'
    // }
    //
    // const name = student.firstName;
    // const {firstName} = student;
    // student = {
    //     ...student,
    //     lastName: 'FK8'
    // }
    // student = {
    //     firstName: student.firstName,
    //     lastName: 'FK8'
    // }


    // const list = NavigationMock;
    // for(const [index, item] of list.entries()) {
    //     console.log(index);
    //     console.log(item);
    // }

    return (
        <section className={classes.Navigation}>
            <div className={classes.Header}></div>

            <div className={classes.Body}>
                <ul className={classes.Items}>
                    {
                        NavigationMock.map((item, index) => (
                            <li className={classes.Item} key={index}>
                                <Box className={classes.Content}
                                     component={(item.children) ? 'span' : 'a'}>
                                    {item.title}
                                </Box>

                                {
                                    (item.children) ?
                                        <div className={classes.SubMenu}>
                                            <ul className={classes.Items}>
                                                {
                                                    item.children.map((item, index) => (
                                                        <li className={classes.Item} key={index}>
                                                            <Box className={classes.Content} component='a'>
                                                                {item.title}
                                                            </Box>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        :
                                        null
                                }
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default Navigation;