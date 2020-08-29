import React, {useEffect} from 'react';
import classScss from './Person.module.scss'
import Master from "../../layout/Master/Master.layout";
import personService from '../../shared/services/person.service'
import PersonTable from '../../shared/component/DataTable/DataTable.component'
import Test from "../../shared/component/Test/Test.component";

const Person = () => {
    const urlGetAll = personService.urlGetAll();
    const [data, setData] = React.useState(0);
   function handler(data1){
       data1+=2;
       setData(data1);
       return data;
   }
    // const [dataList, setDataList] = useState([]);
    /* const loadData= async ()=>{
         const response = await personService.list();
         setDataList(response.data.data);
     }*/
    /*
        useEffect(() => {
            loadData();
        }, []);
    */

    console.log(urlGetAll)
    return (
       <Test action={handler} value={data}/>
    );
}
export default Person;