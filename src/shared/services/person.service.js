import Ajax from '../../utilis/Ajax'
const personService={

    addRecord:async ()=>{
        return null;
    },
    list:async ()=>{
        const response=await Ajax.getAll({
            isAuth:false,
            url:'getAllPersons'
        })
        return response;
    },
    pagable:async (dataIn)=>{
        const response=await Ajax.getAllPage({
            isAuth:false,
            url:'getPersonsPage',
            data:dataIn
        })
        return response;
    }
}
export default personService;