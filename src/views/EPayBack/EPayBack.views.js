import React, {useEffect} from 'react'
import Portal from '@material-ui/core/Portal';
import Master from "../../layout/Master/Master.layout";
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import {STRINGS} from "../../shared/values/strings";
import './EPayBack.scss'
const useStyles = makeStyles((theme) => ({
    alert: {
        padding: theme.spacing(1),
        margin: theme.spacing(1, 0)
    },
}));
const EPayBack = () => {
    const preventDefault = (event) => event.preventDefault();
    const classes = useStyles();
    const [show, setShow] = React.useState(false);

    const onPayed = () => {
        const rand = Math.floor(Math.random() * 10);
        if (rand % 2 === 0) {
            setShow(true);
        } else {
            setShow(false);
        }
    }
    useEffect(() => {
        onPayed();
    });

    return (
        <Master>
            <section className='EPay'>
            {show ? (
            <div className='SuccessPay'>
                {STRINGS.successPay}
                <br/>
                <Link href="#" onClick={preventDefault} color="inherit">
                    {STRINGS.showFactor}
                </Link>
            </div>
                ) :  <div className='FailedPay'>
                {STRINGS.failedPay}
            </div>
            }
            </section>
        </Master>);
}
export default EPayBack;