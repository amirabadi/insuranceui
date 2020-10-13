import React, {useEffect} from 'react';
import { useHistory } from 'react-router';
import './MasterAuth.scss';
import Footer from "../../shared/component/Footer/Footer.component";
import HeaderNavigation from "../../shared/component/HeaderNavigation/HeaderNavigation.component";
import Auth from "../../shared/services/Auth";

const MasterAuth = ({children}) => {

    const history = useHistory();

    // OnLoad
    useEffect(() => {
        if (!Auth.isLogin()) {
            history.push('/LoginPage');
        }
    }, [])

    return (
        <div className='Wrapper'>
            <HeaderNavigation main={children} />
            <Footer />
        </div>
    )
}

export default MasterAuth;