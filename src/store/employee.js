import { createSlice } from '@reduxjs/toolkit'



// Séparer adresse dans store dédié ?
const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        firstName: "",
        lastName: "",
        birth: "",
        startDate: "",
        department: "",
        street: "",
        city: "",
        state: "",
        zipCode: ""
    }, 
    reducers: {
        save: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.birth = action.payload.birth;
            state.startDate = action.payload.startDate;
            state.department = action.payload.department;
            state.street = action.payload.street;
            state.city = action.payload.city;
            state.state = action.payload.state;
            state.zipCode = action.payload.zipCode;
        }
    }
})

export default employeeSlice.reducer;