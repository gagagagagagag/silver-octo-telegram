import { createReducer } from '@reduxjs/toolkit'

import { addLocation } from '../actions/locationHistory.actions'
import { LocationData } from '../../core/models/locationData'

interface ReducerState {
  loading: boolean
  error: Error | null
  current: LocationData | null
  history: LocationData[]
}

const initialState: ReducerState = {
  loading: false,
  error: null,
  current: null,
  history: [],
}

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addLocation.pending, (state) => {
      state.error = null
      state.current = null
      state.loading = true
    })
    .addCase(addLocation.fulfilled, (state, action) => {
      state.loading = false
      state.current = action.payload
      state.history.push(action.payload)
    })
    .addCase(addLocation.rejected, (state, action) => {
      state.loading = false
      // state.error = action.error
    })
})

export default reducer
