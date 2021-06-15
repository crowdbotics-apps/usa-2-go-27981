import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_maplocation_list = createAsyncThunk(
  "mapLocations/api_v1_maplocation_list",
  async payload => {
    const response = await apiService.api_v1_maplocation_list(payload)
    return response.data
  }
)
export const api_v1_maplocation_create = createAsyncThunk(
  "mapLocations/api_v1_maplocation_create",
  async payload => {
    const response = await apiService.api_v1_maplocation_create(payload)
    return response.data
  }
)
export const api_v1_maplocation_read = createAsyncThunk(
  "mapLocations/api_v1_maplocation_read",
  async payload => {
    const response = await apiService.api_v1_maplocation_read(payload)
    return response.data
  }
)
export const api_v1_maplocation_update = createAsyncThunk(
  "mapLocations/api_v1_maplocation_update",
  async payload => {
    const response = await apiService.api_v1_maplocation_update(payload)
    return response.data
  }
)
export const api_v1_maplocation_partial_update = createAsyncThunk(
  "mapLocations/api_v1_maplocation_partial_update",
  async payload => {
    const response = await apiService.api_v1_maplocation_partial_update(payload)
    return response.data
  }
)
export const api_v1_maplocation_delete = createAsyncThunk(
  "mapLocations/api_v1_maplocation_delete",
  async payload => {
    const response = await apiService.api_v1_maplocation_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const mapLocationsSlice = createSlice({
  name: "mapLocations",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_maplocation_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_maplocation_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_maplocation_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_maplocation_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_maplocation_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_maplocation_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_maplocation_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_maplocation_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_maplocation_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_maplocation_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_maplocation_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_maplocation_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_maplocation_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_maplocation_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_maplocation_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_maplocation_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_maplocation_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_maplocation_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_maplocation_list,
  api_v1_maplocation_create,
  api_v1_maplocation_read,
  api_v1_maplocation_update,
  api_v1_maplocation_partial_update,
  api_v1_maplocation_delete,
  slice: mapLocationsSlice
}
