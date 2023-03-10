import { DataGrid } from "@mui/x-data-grid";
import { visitedT3 } from "../../components/datatable/datatablesource";
import { useEffect, useState, React } from "react";


export const Visited3 = () => {
  const [data, setData] = useState([]);

  const actionColumn = [];


  return (

    <div className="datatable">
      <div className="datatableTitle">
        الزبائن
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={visitedT3.concat(actionColumn)}
        pageSize={20}
        rowsPerPageOptions={[4]}
      />
    </div>
  )
}
