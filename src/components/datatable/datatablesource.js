export const customerDatatable = [
  // { field: "id", headerName: "الرقم التعريفي", width: 200 },
  { field: "name", headerName: "اسم الزبون", width: 200 },
  { field: "country", headerName: "اسم الدوله", width: 200 },
  { field: "village", headerName: "اسم القريه", width: 200 },
  { field: "address", headerName: "العنوان", width: 200 },
  { field: "phoneNumber", headerName: "رقم الهاتف", width: 100 },
  
];

export const userDatatable = [
  // { field: "uid", headerName: "الرقم", width: 250 },
  { field: "username", headerName: "اسم المستخدم", width: 200 },
  { field: "email", headerName: "الايميل", width: 200 },
  {
    field: "role",
    headerName: "الصلاحيات",
    width: 200,
    renderCell: (params) => {
      return (
        <div>{`${params.row.role === 0
            ? "مدير"
            : params.row.role === 1
              ? "مشرف"
              : "مندوب"
          }`}</div>
      );
    },
  },
  {
    field: "createdAt",
    headerName: "أنشئت في",
    width: 200,
    renderCell: (params) => {
      return (
        <div>{`${params.row.createdAt
            ? params.row.createdAt?.toDate().toDateString()
            : ""
          }`}</div>
      );
    },
  },
];

export const userDatatableInfo = [
  { field: "day", headerName: "day", width: 250 },
  { field: "customers", headerName: "customers", width: 100 },
];

// export const visitedT1 = [
//   { field: "name", headerName: "Name", width: 250 },
//   { field: "phoneNumber", headerName: "Phone Number", width: 250 },
//   { field: "lastVisit", headerName: "Last Visit", width: 250 },
//   { field: "address", headerName: "Address", width: 250 },
//   { field: "action", headerName: "Action", width: 250 },
// ];

// export const visitedT2 = [
//   { field: "name", headerName: "Name", width: 250 },
//   { field: "phoneNumber", headerName: "Phone Number", width: 250 },
//   { field: "lastVisit", headerName: "Last Visit", width: 250 },
//   { field: "address", headerName: "Address", width: 250 },
//   { field: "action", headerName: "Action", width: 250 },
// ];

// export const visitedT3 = [
//   { field: "name", headerName: "Name", width: 250 },
//   { field: "phoneNumber", headerName: "Phone Number", width: 250 },
//   { field: "lastVisit", headerName: "Last Visit", width: 250 },
//   { field: "address", headerName: "Address", width: 250 },
//   { field: "action", headerName: "Action", width: 250 },
// ];

