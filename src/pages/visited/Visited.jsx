import { DataGrid } from "@mui/x-data-grid";
import { visitedT1 } from "../../components/datatable/datatablesource";
import { useEffect, useState, React } from "react";


export const Visited = () => {
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
        columns={visitedT1.concat(actionColumn)}
        pageSize={20}
        rowsPerPageOptions={[4]}
      />
    </div>
  )
}
