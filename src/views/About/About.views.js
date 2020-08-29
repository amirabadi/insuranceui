import React, {Component} from 'react';
import MasterAuth from "../../layout/MasterAuth/MasterAuth.layout";
import Button from "@material-ui/core/Button";
import Auth from "../../shared/services/Auth";

const About = () => {
    function onLogout() {
        // Request to server
        Auth.logout();
    }

    return (
        <MasterAuth title='Home Page'>
            <section className='About'>
                <Button variant="contained" color="primary" onClick={onLogout}>
                    Logout
                </Button>
            </section>
        </MasterAuth>
    )
}

export default About;