import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_userprofile_list = createAsyncThunk(
  "userProfiles/api_v1_userprofile_list",
  async payload => {
    const response = await apiService.api_v1_userprofile_list(payload)
    return response.data
  }
)
export const api_v1_userprofile_create = createAsyncThunk(
  "userProfiles/api_v1_userprofile_create",
  async payload => {
    const response = await apiService.api_v1_userprofile_create(payload)
    return response.data
  }
)
export const api_v1_userprofile_read = createAsyncThunk(
  "userProfiles/api_v1_userprofile_read",
  async payload => {
    const response = await apiService.api_v1_userprofile_read(payload)
    return response.data
  }
)
export const api_v1_userprofile_update = createAsyncThunk(
  "userProfiles/api_v1_userprofile_update",
  async payload => {
    const response = await apiService.api_v1_userprofile_update(payload)
    return response.data
  }
)
export const api_v1_userprofile_partial_update = createAsyncThunk(
  "userProfiles/api_v1_userprofile_partial_update",
  async payload => {
    const response = await apiService.api_v1_userprofile_partial_update(payload)
    return response.data
  }
)
export const api_v1_userprofile_delete = createAsyncThunk(
  "userProfiles/api_v1_userprofile_delete",
  async payload => {
    const response = await apiService.api_v1_userprofile_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const userProfilesSlice = createSlice({
  name: "userProfiles",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_userprofile_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_userprofile_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_userprofile_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_userprofile_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_userprofile_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_userprofile_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_userprofile_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_userprofile_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_userprofile_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_userprofile_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_userprofile_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_userprofile_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_userprofile_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_userprofile_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_userprofile_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_userprofile_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_userprofile_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_userprofile_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_userprofile_list,
  api_v1_userprofile_create,
  api_v1_userprofile_read,
  api_v1_userprofile_update,
  api_v1_userprofile_partial_update,
  api_v1_userprofile_delete,
  slice: userProfilesSlice
}
