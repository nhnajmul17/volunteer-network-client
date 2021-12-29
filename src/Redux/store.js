import { configureStore } from '@reduxjs/toolkit'
import volunteerReducer from './VolunteerSlice/VolunteerSlice'

export const store = configureStore({
    reducer: {
        volunteer: volunteerReducer,

    },
})