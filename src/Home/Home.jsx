import { useState } from "react";
import { Link } from "react-router-dom";

import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import Modal from 'elias-mennrath_modal-pkg';
// import Modal from "../components/Modal/Modal";
        

import store from "../store/store";
import { save } from "../store/employee";
import { states, departements } from "../../data.js";

import "./home.css";

import 'primeicons/primeicons.css';

export default function Home() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [startDate, setStartDate] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [department, setDepartment] = useState("");



    

    function handleSubmit(e) {
        console.log("handleSubmit");
        e.preventDefault();

        store.dispatch(save({ firstName, lastName, dateOfBirth, startDate, department, street, city, state, zipCode }));
        
    }

    let test = <div>Heelo <span>world</span></div>;


    return (
        <div className="container">
            <Link to="/employees">View current employees</Link>
            <h2>Create Employee</h2>
            <form action="#" id="create-employee" onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name: </label>
                <input onChange={(e) => setFirstName(e.target.value)} type="text" id="firstName" name="firstName" className="p-inputtext" />

                <label htmlFor="lastName">Last Name: </label>
                <input onChange={(e) => setLastName(e.target.value)} type="text" id="lastName" name="lastName" className="p-inputtext" />

                <label htmlFor="dateOfBirth">Date of Birth: </label>
                <Calendar value={dateOfBirth} onChange={(e) => setDateOfBirth(e.value)} showButtonBar inputId="dateOfBirth" />

                <label htmlFor="startDate">Start date: </label>
                <Calendar value={startDate} onChange={(e) => setStartDate(e.value)} showButtonBar inputId="startDate" />


                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input onChange={(e) => setStreet(e.target.value)} id="street" name="street" type="text" className="p-inputtext" />

                    <label htmlFor="city">City</label>
                    <input onChange={(e) => setCity(e.target.value)} id="city" name="city" type="text" className="p-inputtext" />

                    <label htmlFor="state">State</label>
                    <Dropdown inputId="state" value={state} onChange={(e)=>setState(e.value)} options={states}  variant="filled" className="p-dropdown" />

                    <label htmlFor="zipCode">Zip Code</label>
                    <input onChange={(e) => setZipCode(e.target.value)} id="zipCode" name="zipCode" type="number" className="p-inputtext"/>
                </fieldset>

                <label htmlFor="departement">Department: </label>
                <Dropdown inputId="departement" value={department} onChange={(e)=>setDepartment(e.value)} options={departements}  variant="filled" className="p-dropdown" />
                
            </form>

            <Modal body="Employee Created!" header={test} outsideClick={true} > 
                <button type="submit" className="p-button" onClick={(e) => handleSubmit(e)}>Save</button>
            </Modal>

        </div>
    );
}