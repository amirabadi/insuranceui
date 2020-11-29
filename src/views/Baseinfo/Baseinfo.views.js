import React, {useEffect} from 'react';
import classScss from './BaseInfo.module.scss'
import Master from "../../layout/Master/Master.layout";
import baseInfoService from '../../shared/services/baseInfo.service'
import PersonTable from '../../shared/component/DataTable/DataTable.component'
import MasterAuth from "../../layout/MasterAuth/MasterAuth.layout";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from '@material-ui/icons/Edit';
import {STRINGS} from "../../shared/values/strings";
import { useHistory } from 'react-router';

const Baseinfo = () => {
    const [content, setContent] = React.useState([]);
    const [totalElements, setTotalElements] = React.useState(0);
    const [pageNumberDT, setPageNumberDT] = React.useState(0);
    const [rowsIntoPage, setRowsIntoPage] = React.useState(5);
    const history = useHistory();
    let dataTableDTO = {
        pageNumber: 0,
        rowsIntoPage: rowsIntoPage,
        idParent:0,
        sortMeta:[],
        filterMeta:[]
    }
    const colKey = [
        'title', 'parentTitle'
    ];
    let dataGrid={
        filedName:'',
        filedValue:'',
        operator:''
    }
    const colHeader = [STRINGS.titleBaseInfo, STRINGS.titleParentBaseInfo];
    // const [dataList, setDataList] = useState([]);
    const loadData = async () => {
        const response = await baseInfoService.pagable(dataTableDTO);
        setContent(response.data.content);
        setTotalElements(response.data.totalElements);

    }

    useEffect(() => {
        loadData();
    }, []);
function changePage(){
    history.push('organization');
}
    function ChangePageHandler(event, newPage) {
        setPageNumberDT(newPage);
        dataTableDTO.pageNumber = newPage;
        loadData();
    }

    const testDropdownPopupHandle = async () => {
        const response = await baseInfoService.dropdownRecord({idParent:3});
        console.log(response);
    };
    const savePopupHandle=async (event)=>{
       // const response = await baseInfoService.addRecord({title:"تست2",parentId:3});
        const response = await baseInfoService.addRecord({title:"تست3"});
        console.log(response);
    }
    const deletePopupHandle = async (event) => {
        const response = await baseInfoService.deleteRecord({id:17});
        console.log(response);
    };
    const editPopupHandle = async(event) => {
        const response = await baseInfoService.editRecord({id:16,title: "ویرایشی"});
        console.log(response);
    };
    const updatePopupHandle = async(event) => {

    };
    const filterPopupHandle=(event)=>{
        dataTableDTO.filterMeta=[];
        dataTableDTO.filterMeta.push({filedName:'title',filedValue:'نوع ارز',operator:'eq'})
/*
        dataTableDTO.filterMeta.push({filedName:'id',filedValue:2,operator:'eq'})
*/
        //dataTableDTO.filterMeta.push({filedName:'parent',filedValue:null,operator:'eq'})
        loadData();
    };
   const sortPopupHandle=(event)=>{
       dataTableDTO.sortMeta=[];
       dataTableDTO.sortMeta.push({filedName:'title',direction:'asc'})
       dataTableDTO.sortMeta.push({filedName:'id',direction:'desc'})

       loadData();
   };

    return (<MasterAuth>
        <Button variant="contained" onClick={testDropdownPopupHandle} color="secondary" startIcon={<SaveIcon/>}>testDropdown</Button>
        <Button variant="contained" onClick={changePage} color="secondary" startIcon={<SaveIcon/>}>changePage</Button>
        <br/>
            <Button variant="contained" onClick={savePopupHandle} color="secondary" startIcon={<SaveIcon/>}>save</Button>
        <br/>
        <Button variant="contained" onClick={filterPopupHandle} color="secondary"
                startIcon={<DeleteIcon/>}>Filter</Button>
        <Button variant="contained" onClick={sortPopupHandle} color="secondary" startIcon={<EditIcon/>}>Sort</Button>
    <Button variant="contained" onClick={editPopupHandle} color="secondary" startIcon={<EditIcon />}>edit</Button>
        <Button variant="contained" onClick={deletePopupHandle} color="secondary"
                startIcon={<DeleteIcon/>}>Delete</Button>
        <PersonTable dataList={content} allItems={totalElements} pageNo={pageNumberDT} rowsPerPage={rowsIntoPage}
                     changePage={ChangePageHandler}
                     editable={true} dataKey={colKey} dataHeader={colHeader} onDelete={deletePopupHandle}
                     onUpdate={updatePopupHandle}/>
    </MasterAuth>);
}
export default Baseinfo;