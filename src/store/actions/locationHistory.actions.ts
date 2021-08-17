import { createAsyncThunk } from '@reduxjs/toolkit'

import { LocationData } from '../../core/models/locationData'
import { ipStackInstance } from '../../core/axios'

export const addLocation = createAsyncThunk(
  'locationHistory/addLocation',
  async (locationSource: string) => {
    const { data } = await ipStackInstance.get<LocationData>(
      `/${locationSource}`
    )

    return data
  }
)
