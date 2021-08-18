import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'

import { LocationData } from '../../core/models/locationData'
import { ipStackInstance } from '../../core/axios'

export const addLocation = createAsyncThunk<
  LocationData,
  string,
  { rejectValue: string }
>('locationHistory/addLocation', async (locationSource, thunkAPI) => {
  try {
    const { data } = await ipStackInstance.get<LocationData>(
      `/${locationSource}`
    )

    return data
  } catch (error: Error | AxiosError | any) {
    console.log(error)
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.message)
    } else if ('message' in error) {
      return thunkAPI.rejectWithValue(error.message)
    } else {
      return thunkAPI.rejectWithValue('Unknown Error!')
    }
  }
})
