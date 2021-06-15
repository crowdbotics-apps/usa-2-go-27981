import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_driverwallet_list = createAsyncThunk(
  "driverWallets/api_v1_driverwallet_list",
  async payload => {
    const response = await apiService.api_v1_driverwallet_list(payload)
    return response.data
  }
)
export const api_v1_driverwallet_create = createAsyncThunk(
  "driverWallets/api_v1_driverwallet_create",
  async payload => {
    const response = await apiService.api_v1_driverwallet_create(payload)
    return response.data
  }
)
export const api_v1_driverwallet_read = createAsyncThunk(
  "driverWallets/api_v1_driverwallet_read",
  async payload => {
    const response = await apiService.api_v1_driverwallet_read(payload)
    return response.data
  }
)
export const api_v1_driverwallet_update = createAsyncThunk(
  "driverWallets/api_v1_driverwallet_update",
  async payload => {
    const response = await apiService.api_v1_driverwallet_update(payload)
    return response.data
  }
)
export const api_v1_driverwallet_partial_update = createAsyncThunk(
  "driverWallets/api_v1_driverwallet_partial_update",
  async payload => {
    const response = await apiService.api_v1_driverwallet_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_driverwallet_delete = createAsyncThunk(
  "driverWallets/api_v1_driverwallet_delete",
  async payload => {
    const response = await apiService.api_v1_driverwallet_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const driverWalletsSlice = createSlice({
  name: "driverWallets",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_driverwallet_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_driverwallet_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_driverwallet_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_driverwallet_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_driverwallet_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_driverwallet_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_driverwallet_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_driverwallet_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_driverwallet_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_driverwallet_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_driverwallet_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_driverwallet_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_driverwallet_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_driverwallet_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_driverwallet_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_driverwallet_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_driverwallet_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_driverwallet_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_driverwallet_list,
  api_v1_driverwallet_create,
  api_v1_driverwallet_read,
  api_v1_driverwallet_update,
  api_v1_driverwallet_partial_update,
  api_v1_driverwallet_delete,
  slice: driverWalletsSlice
}
