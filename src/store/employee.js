import { createSlice } from '@reduxjs/toolkit'



// Séparer adresse dans store dédié ?
const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        employees : []
    }, 
    reducers: {
        save: (state, action) => {
            action.payload.id = state.employees.length + 1;
            if(typeof action.payload.dateOfBirth === 'object') {
                action.payload.dateOfBirth = action.payload.dateOfBirth.toISOString().slice(0, 10);
            }
            if(typeof action.payload.startDate === 'object') {
                action.payload.startDate = action.payload.startDate.toISOString().slice(0, 10);
            }
            state.employees.push(action.payload);
        }
    }
})

export default employeeSlice.reducer;
export const { save } = employeeSlice.actions;