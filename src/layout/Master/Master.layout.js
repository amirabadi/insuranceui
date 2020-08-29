import React from 'react';
import './Master.scss';
import Footer from "../../shared/component/Footer/Footer.component";
import HeaderNavigation from "../../shared/component/HeaderNavigation/HeaderNavigation.component";

const Master = ({children}) => {
    return (
        <div className='Wrapper'>
            <HeaderNavigation main={children} />
            <Footer />
        </div>
    )
}

export default Master;