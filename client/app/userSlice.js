import { creatSlice, createAsyncThunk } from 'react-redux'
import axios from 'axios'

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const { data } = await axios.get('/api/users')
    return data
})

const userSlice = creatSlice({
    name: 'users',
    initialState: [],
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload
        })
    },
})

export default userSlice.reducer
