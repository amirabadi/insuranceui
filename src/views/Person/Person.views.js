import React, {useEffect} from 'react';
import classScss from './Person.module.scss'
import Master from "../../layout/Master/Master.layout";
import personService from '../../shared/services/person.service'
import PersonTable from '../../shared/component/DataTable/DataTable.component'
import Test from "../../shared/component/Test/Test.component";
import DataTableDTo from '../../shared/dto/DataTableDTO'
import MasterAuth from "../../layout/MasterAuth/MasterAuth.layout";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import TableRow from "@material-ui/core/TableRow";

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

    const savePopupHandle=()=>{

    };
    const deletePopupHandle=(event)=>{
alert(event);
    };
    const updatePopupHandle=(event)=>{
        alert(event);
    };
    return (
        <MasterAuth>
            <Button variant="contained" onClick={savePopupHandle} color="secondary" startIcon={<DeleteIcon />} >Delete</Button>
                <PersonTable dataList={content} allItems={totalElements} pageNo={pageNumberDT} rowsPerPage={rowsIntoPage} changePage={ChangePageHandler}
            editable={true} onDelete={deletePopupHandle} onUpdate={updatePopupHandle}/>
        </MasterAuth>
    );
}
export default Person;