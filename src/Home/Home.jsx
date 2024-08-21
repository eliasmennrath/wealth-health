import store from "../store/store";
import save from "../store/employee";

export default function Home() {

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [dateOfBirth, setDateOfBirth] = useState("");
    // const [startDate, setStartDate] = useState("");
    // const [street, setStreet] = useState("");
    // const [city, setCity] = useState("");
    // const [state, setState] = useState("");
    // const [zipCode, setZipCode] = useState("");
    // const [department, setDepartment] = useState("");

    // function handleChange(e) { 

    // }


    function handleSubmit(formData) {
        const firstName = formData.get("first-name");
        const lastName = formData.get("last-name");
        const dateOfBirth = formData.get("date-of-birth");
        const startDate = formData.get("start-date");
        const department = formData.get("department");
        const street = formData.get("street");
        const city = formData.get("city");
        const state = formData.get("state");
        const zipCode = formData.get("zip-code");

        store.dispatch(save({ firstName, lastName, dateOfBirth, startDate, department, street, city, state, zipCode }));
        
        
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



    return (
        <div className="container">
            {/* Link */}
            <h2>Create Employee</h2>
            <form action={handleSubmit} id="create-employee">
                <label htmlFor="first-name">First Name: </label>
                <input type="text" id="first-name" name="first-name" />

                <label htmlFor="last-name">Last Name: </label>
                <input type="text" id="last-name" name="last-name" />

                <label htmlFor="date-of-birth">Date of Birth: </label>
                <input id="date-of-birth" name="date-of-birth" type="text" />

                <label htmlFor="start-date">Start date: </label>
                <input id="start-date" name="start-date" type="text" />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" name="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input id="city" name="city" type="text" />

                    <label htmlFor="state">State</label>
                    <select name="state" id="state"></select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" name="zip-code" type="number" />
                </fieldset>

                <label htmlFor="department">Department: </label>
                <select name="department" id="department">
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