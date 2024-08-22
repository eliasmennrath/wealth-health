import { useState } from "react";

import store from "../store/store";
import save from "../store/employee";

import "./home.css";

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
        e.preventDefault();

        if(store.dispatch(save({ firstName, lastName, dateOfBirth, startDate, department, street, city, state, zipCode }))) {
            displayModal();
        }

        
        
        // const employee = {
        //     firstName: formData.get("first-name"),
        //     lastName: formData.get("last-name"),    
        //     dateOfBirth: formData.get("date-of-birth"),
        //     startDate: formData.get("start-date"),
        //     department: formData.get("department"),
        //     street: formData.get("street"),
        //     city: formData.get("city"),
        //     state: formData.get("state"),
        //     zipCode: formData.get("zip-code")
        // };
        
        // store.dispatch(save({ employee }));
    }

    function displayModal() {

    }



    return (
        <div className="container">
            {/* Link */}
            <h2>Create Employee</h2>
            <form action="#" id="create-employee" onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name: </label>
                <input onChange={(e) => setFirstName(e.target.value)} type="text" id="firstName" name="firstName" />

                <label htmlFor="lastName">Last Name: </label>
                <input onChange={(e) => setLastName(e.target.value)} type="text" id="lastName" name="lastName" />

                <label htmlFor="dateOfBirth">Date of Birth: </label>
                <input onChange={(e) => setDateOfBirth(e.target.value)} id="dateOfBirth" name="dateOfBirth" type="text" />

                <label htmlFor="startDate">Start date: </label>
                <input onChange={(e) => setStartDate(e.target.value)} id="startDate" name="startDate" type="text" />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input onChange={(e) => setStreet(e.target.value)} id="street" name="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input onChange={(e) => setCity(e.target.value)} id="city" name="city" type="text" />

                    <label htmlFor="state">State</label>
                    <select onChange={(e) => setState(e.target.value)} name="state" id="state"></select>

                    <label htmlFor="zipCode">Zip Code</label>
                    <input onChange={(e) => setZipCode(e.target.value)} id="zipCode" name="zipCode" type="number" />
                </fieldset>

                <label htmlFor="department">Department: </label>
                <select onChange={(e) => setDepartment(e.target.value)} name="department" id="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>

                <button type="submit">Save</button>
            </form>

            <div id="confirmation" className="modal">Employee created !</div>
        </div>
    );
}