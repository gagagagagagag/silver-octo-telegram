import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
  currentLocation: null
  locationHistory: []
}

const initialState: State = {
  currentLocation: null,
  locationHistory: [],
}

const slice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    addLocation: (state: State, action: PayloadAction) => {},
  },
})
