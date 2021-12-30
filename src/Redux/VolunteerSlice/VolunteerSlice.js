import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const fetchevents = createAsyncThunk(
    'volunteer/events',
    async () => {
        const response = await fetch('https://ancient-lake-01432.herokuapp.com/events')
            .then(res => res.json())
        return response
    }
)

export const addEvent = createAsyncThunk(
    'volunteer/events',
    async (data) => {
        const response = await fetch("https://ancient-lake-01432.herokuapp.com/addevents", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        alert('Events added')
        return response
    }
)

export const addvolunteer = createAsyncThunk(
    'volunteer/volunteers',
    async (data) => {
        const response = await fetch('https://ancient-lake-01432.herokuapp.com/volunteers', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                if (res.data.insertedId) {
                    alert('volunteer added')
                }
            })
        return response
    }
)


export const fetchvolunteers = createAsyncThunk(
    'volunteer/volunteers',
    async () => {
        const response = await fetch('https://ancient-lake-01432.herokuapp.com/volunteers')
            .then(res => res.json())

        return response
    }
)

export const deletevolunteers = createAsyncThunk(
    'volunteer/volunteers',
    async (id) => {
        const response = await fetch(`https://ancient-lake-01432.herokuapp.com/deleteVolunteer/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    alert('Deleted Volunteer')
                    window.location.reload()
                } else {
                }
            });
        return response
    }
)





const initialState = {
    events: [],
    volunteers: []
}

export const VolunteerSlice = createSlice({
    name: 'volunteer',
    initialState,
    reducers: {
        addevents: (state, { payload }) => {
            state.events = payload

        },

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchevents.fulfilled, (state, action) => {
            // Add user to the state array
            state.events = (action.payload)
        })
        builder.addCase(fetchvolunteers.fulfilled, (state, action) => {
            // Add user to the state array
            state.volunteers = (action.payload)
        })
    },
})

// Action creators are generated for each case reducer function
export const { addevents } = VolunteerSlice.actions

export default VolunteerSlice.reducer