import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Input, MenuItem, Select, InputLabel, TextField, Grid, Button } from "@mui/material";
import './datatable.scss'
const customers = [
    { id: 1, name: "John", phone: "123-456-7890", lastVisit: "2023-03-01", address: "123 Main St", city: "New York", village: "Manhattan" },
    { id: 2, name: "Jane", phone: "234-567-8901", lastVisit: "2022-02-15", address: "456 Maple Ave", city: "New York", village: "Queens" },
    { id: 3, name: "Bob", phone: "345-678-9012", lastVisit: "2023-03-10", address: "789 Oak St", city: "New York", village: "Brooklyn" },
    { id: 4, name: "Alice", phone: "456-789-0123", lastVisit: "2022-01-15", address: "321 Elm St", city: "New York", village: "Manhattan" },
    { id: 5, name: "Tom", phone: "567-890-1234", lastVisit: "2022-01-01", address: "654 Pine St", city: "New York", village: "Queens" },
    { id: 6, name: "Sue", phone: "678-901-2345", lastVisit: "2021-12-15", address: "987 Cedar St", city: "New York", village: "Brooklyn" },
];

const columns = [
    { field: "name", headerName: "اسم الزبون", flex: 1 },
    { field: "phone", headerName: "رقم الهاتف", flex: 1 },
    { field: "lastVisit", headerName: "اخر زياره", flex: 1 },
    { field: "address", headerName: "العنوان", flex: 1 },
    { field: "city", headerName: "اسم المدينه", flex: 1 },
    { field: "village", headerName: "اسم القريه", flex: 1 },
    { field: "action", headerName: "Action", flex: 1, renderCell: () => <button>Add new</button> },
];

export const VisitDataTable = () => {
    const [city, setCity] = useState("");
    const [village, setVillage] = useState("");
    const [searchText, setSearchText] = useState("");
    const [filteredCustomers, setFilteredCustomers] = useState([]);

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleVillageChange = (event) => {
        setVillage(event.target.value);
    };

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
    };

    const filterCustomers = () => {
        let filtered = customers.filter((customer) => customer.city === city && customer.village === village);
        if (searchText) {
            filtered = filtered.filter(
                (customer) =>
                    customer.name.toLowerCase().includes(searchText.toLowerCase()) ||
                    customer.phone.includes(searchText)
            );
        }
        setFilteredCustomers(filtered);
    };

    const lessThanTwoWeeks = filteredCustomers.filter((customer) => {
        const diff = new Date() - new Date(customer.lastVisit);
        const daysDiff = Math.ceil(diff / (1000 * 60 * 60 * 24));
        return daysDiff <= 14;
    });

    const lessThanOneMonth = filteredCustomers.filter((customer) => {
        const diff = new Date() - new Date(customer.lastVisit);
        const daysDiff = Math.ceil(diff / (1000 * 60 * 60 * 24));
        return daysDiff > 14 && daysDiff <= 30;
    });

    const otherCustomers = filteredCustomers.filter((customer) => {
        const diff = new Date() - new Date(customer.lastVisit);
        const daysDiff = Math.ceil(diff / (1000 * 60 * 60 * 24));
        return daysDiff > 30;
    });

    const tableHeight = 400;

    return (
        <>

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ m: '20px',direction:'rtl' }}
            >

                <InputLabel >المدينه:</InputLabel>
                <Select displayEmpty value={city} onChange={handleCityChange}
                    renderValue={city !== "" ? undefined : () => "اختار المدينه"}
                >
                    <MenuItem value="none" disabled>
                        <em>Select the City</em>
                    </MenuItem>
                    <MenuItem value="New York">New York</MenuItem>
                    <MenuItem value="Los Angeles">Los Angeles</MenuItem>
                    {/* Add more cities here  */}
                </Select>

                <InputLabel
                    className="searchBar2" htmlFor="village-select">القريه:</InputLabel>
                <Select displayEmpty value={village} onChange={handleVillageChange} renderValue={village !== "" ? undefined : () => "اختار ال قريه"}>
                    <MenuItem value="" disabled>
                        <em>Select the Village</em>
                    </MenuItem>
                    <MenuItem value="Manhattan">Manhattan</MenuItem>
                    <MenuItem value="Queens">Queens</MenuItem>
                    <MenuItem value="Brooklyn">Brooklyn</MenuItem>
                    {/* // Add more villages here  */}
                </Select>

                <TextField sx={{ m: '5px 25px' }} variant="filled" type="text" label="ابحث عبر الاسم" value={searchText} onChange={handleSearchTextChange} />

                <Button variant="contained" color="success" onClick={filterCustomers}>ابحث</Button>

            </Grid>
            <Grid sx={{ m: '20px',direction:'rtl' }}>
            <div style={{ height: tableHeight, width: "100%" }}>
                <h2>زار الزبائن من أقل من أسبوعين :</h2>
                <DataGrid rows={lessThanTwoWeeks} columns={columns}  />
                <h2>زار الزبائن  من أقل من شهر:</h2>
                <DataGrid rows={lessThanOneMonth} columns={columns} />
                <h2>زار الزبائن من اكثر من شهر:</h2>
                <DataGrid rows={otherCustomers} columns={columns} />
            </div>
            </Grid>
        </>
    );
};