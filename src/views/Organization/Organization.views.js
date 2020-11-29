import MasterAuth from "../../layout/MasterAuth/MasterAuth.layout";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonTable from "../../shared/component/DataTable/DataTable.component";
import React, {useEffect} from "react";
import orgservice from "../../shared/services/org.service";
import Master from "../../layout/Master/Master.layout";

const Organization = () => {
    const [totalElements, setTotalElements] = React.useState("");
    const t = async () => {
        const response = await orgservice.dropdownRecord();
        console.log(response);
        setTotalElements(response.data);
    }
    useEffect(() => {
        t();
    }, []);
    return (
        <MasterAuth>
            <section>
                {totalElements}
            </section>
        </MasterAuth>
    );
}
export default Organization;