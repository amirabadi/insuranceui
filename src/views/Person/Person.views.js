import React, {useEffect} from 'react';
import classScss from './Person.module.scss'
import Master from "../../layout/Master/Master.layout";
import personService from '../../shared/services/person.service'
import PersonTable from '../../shared/component/DataTable/DataTable.component'
import Test from "../../shared/component/Test/Test.component";
import DataTableDTo from '../../shared/dto/DataTableDTO'
import MasterAuth from "../../layout/MasterAuth/MasterAuth.layout";

const Person = () => {
    const [content, setContent] = React.useState([]);
    const [totalElements, setTotalElements] = React.useState(0);
    const [pageNumberDT, setPageNumberDT] = React.useState(0);
    const [rowsIntoPage, setRowsIntoPage] = React.useState(5);

    let dataTableDTO={
        pageNumber:0,
        rowsIntoPage:rowsIntoPage
    }
    // const [dataList, setDataList] = useState([]);
    const loadData = async () => {
        const response = await personService.pagable(dataTableDTO);
        setContent(response.data.content);
        setTotalElements(response.data.totalElements);

    }

    useEffect(() => {
        loadData();
    }, []);

    function ChangePageHandler(event,newPage){
        setPageNumberDT(newPage);
        dataTableDTO.pageNumber=newPage;
        loadData();
    }

    return (
        <MasterAuth>
            <PersonTable dataList={content} allItems={totalElements} pageNo={pageNumberDT} rowsPerPage={rowsIntoPage} changePage={ChangePageHandler}
            editable={true}/>
        </MasterAuth>
    );
}
export default Person;