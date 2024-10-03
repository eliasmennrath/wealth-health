
import { PrimeReactProvider } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import {useSelector} from 'react-redux';
import { useState } from 'react';
        
import { Link } from 'react-router-dom';

import store from '../store/store';
import { save } from '../store/employee';
import {fakeEmployees} from '../../data';


import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
        
import './employees.css';
        
export default function Employees() {

    const [ globalFilter, setGlobalFilter ] = useState(null);


    console.log(fakeEmployees);
    // Create fake database
    const employees = useSelector(state => state.employee.employees);

    if(employees.length < 5) {
        fakeEmployees.forEach(employee => store.dispatch(save(employee)))
    }   
        

    return (
        <>
        <PrimeReactProvider>
            <div className="p-inputgroup">
                <span className="p-inputgroup-addon">
                    <span className="pi pi-search"></span>
                </span>
                <InputText
                    type="search"
                    onInput={(e) => setGlobalFilter(e.target.value)}
                    placeholder="Rechercher..."
                    width={'50%'}
                />
            </div>

            <DataTable value={employees} 
                stripedRows 
                paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
                dataKey="id" globalFilter={globalFilter}
                emptyMessage="Aucune donnée trouvée."
            >
                <Column key={employees.firstName} sortable field="firstName" header="First Name" />
                <Column key={employees.lastName} sortable field="lastName" header="Last Name" />
                <Column key={employees.startDate} sortable field="startDate" header="Start Date" />
                <Column key={employees.dateOfBirth} sortable field="dateOfBirth" header="Date of Birth" />
                <Column key={employees.department} sortable field="department" header="Department" />
                <Column key={employees.city} sortable field="city" header="City" />
                <Column key={employees.state} sortable field="state" header="State" />
                <Column key={employees.zipCode} sortable field="zipCode" header="Zip Code" />
            </DataTable>
        </PrimeReactProvider>
        <Link to="/">Home</Link>

    </>
    );
}