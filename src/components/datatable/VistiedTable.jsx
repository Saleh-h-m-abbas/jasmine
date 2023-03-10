import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import {
    collection,
    deleteDoc,
    doc,
    onSnapshot,
} from "firebase/firestore";
import { auth, db } from "../../firebase";
import { userDatatable } from "../datatable/datatablesource";


export const VistiedTable = () => {
    return (
        <div className="datatable">
            <div className="datatableTitle">
                الزبائن
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={visitedT1.concat(actionColumn)}
                pageSize={20}
                rowsPerPageOptions={[4]}
            />
        </div>
    )
}
