import Ajax from '../../utilis/Ajax'
import Auth from "./Auth";
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { cookies } from 'js-cookie';

import Person from "../../views/Person/Person.views";
const personService={

    addRecord:async ()=>{
        return null;
    },
    list:async ()=>{
        const response=await Ajax.getAll({
            url:'getAllPersons'
        })
        return response;
    },
    pagable:async (dataIn)=>{
        const response=await Ajax.getAllPage({


            url:'getPersonsPage',
            data:dataIn
        })
        return response;
    }
}
export default personService;