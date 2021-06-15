import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_profilelocation_list = createAsyncThunk(
  "profileLocations/api_v1_profilelocation_list",
  async payload => {
    const response = await apiService.api_v1_profilelocation_list(payload)
    return response.data
  }
)
export const api_v1_profilelocation_create = createAsyncThunk(
  "profileLocations/api_v1_profilelocation_create",
  async payload => {
    const response = await apiService.api_v1_profilelocation_create(payload)
    return response.data
  }
)
export const api_v1_profilelocation_read = createAsyncThunk(
  "profileLocations/api_v1_profilelocation_read",
  async payload => {
    const response = await apiService.api_v1_profilelocation_read(payload)
    return response.data
  }
)
export const api_v1_profilelocation_update = createAsyncThunk(
  "profileLocations/api_v1_profilelocation_update",
  async payload => {
    const response = await apiService.api_v1_profilelocation_update(payload)
    return response.data
  }
)
export const api_v1_profilelocation_partial_update = createAsyncThunk(
  "profileLocations/api_v1_profilelocation_partial_update",
  async payload => {
    const response = await apiService.api_v1_profilelocation_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_profilelocation_delete = createAsyncThunk(
  "profileLocations/api_v1_profilelocation_delete",
  async payload => {
    const response = await apiService.api_v1_profilelocation_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const profileLocationsSlice = createSlice({
  name: "profileLocations",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_profilelocation_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_profilelocation_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_profilelocation_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_profilelocation_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_profilelocation_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_profilelocation_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_profilelocation_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_profilelocation_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_profilelocation_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_profilelocation_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_profilelocation_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_profilelocation_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_profilelocation_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_profilelocation_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_profilelocation_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_profilelocation_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_profilelocation_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_profilelocation_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_profilelocation_list,
  api_v1_profilelocation_create,
  api_v1_profilelocation_read,
  api_v1_profilelocation_update,
  api_v1_profilelocation_partial_update,
  api_v1_profilelocation_delete,
  slice: profileLocationsSlice
}
