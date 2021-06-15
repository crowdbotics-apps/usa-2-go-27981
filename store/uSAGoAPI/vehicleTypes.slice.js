import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_vehicletype_list = createAsyncThunk(
  "vehicleTypes/api_v1_vehicletype_list",
  async payload => {
    const response = await apiService.api_v1_vehicletype_list(payload)
    return response.data
  }
)
export const api_v1_vehicletype_create = createAsyncThunk(
  "vehicleTypes/api_v1_vehicletype_create",
  async payload => {
    const response = await apiService.api_v1_vehicletype_create(payload)
    return response.data
  }
)
export const api_v1_vehicletype_read = createAsyncThunk(
  "vehicleTypes/api_v1_vehicletype_read",
  async payload => {
    const response = await apiService.api_v1_vehicletype_read(payload)
    return response.data
  }
)
export const api_v1_vehicletype_update = createAsyncThunk(
  "vehicleTypes/api_v1_vehicletype_update",
  async payload => {
    const response = await apiService.api_v1_vehicletype_update(payload)
    return response.data
  }
)
export const api_v1_vehicletype_partial_update = createAsyncThunk(
  "vehicleTypes/api_v1_vehicletype_partial_update",
  async payload => {
    const response = await apiService.api_v1_vehicletype_partial_update(payload)
    return response.data
  }
)
export const api_v1_vehicletype_delete = createAsyncThunk(
  "vehicleTypes/api_v1_vehicletype_delete",
  async payload => {
    const response = await apiService.api_v1_vehicletype_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const vehicleTypesSlice = createSlice({
  name: "vehicleTypes",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_vehicletype_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vehicletype_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_vehicletype_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vehicletype_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vehicletype_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_vehicletype_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vehicletype_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vehicletype_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_vehicletype_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vehicletype_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vehicletype_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vehicletype_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vehicletype_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vehicletype_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vehicletype_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vehicletype_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vehicletype_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vehicletype_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_vehicletype_list,
  api_v1_vehicletype_create,
  api_v1_vehicletype_read,
  api_v1_vehicletype_update,
  api_v1_vehicletype_partial_update,
  api_v1_vehicletype_delete,
  slice: vehicleTypesSlice
}
