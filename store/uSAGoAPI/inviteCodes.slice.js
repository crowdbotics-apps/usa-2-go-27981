import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_invitecode_list = createAsyncThunk(
  "inviteCodes/api_v1_invitecode_list",
  async payload => {
    const response = await apiService.api_v1_invitecode_list(payload)
    return response.data
  }
)
export const api_v1_invitecode_create = createAsyncThunk(
  "inviteCodes/api_v1_invitecode_create",
  async payload => {
    const response = await apiService.api_v1_invitecode_create(payload)
    return response.data
  }
)
export const api_v1_invitecode_read = createAsyncThunk(
  "inviteCodes/api_v1_invitecode_read",
  async payload => {
    const response = await apiService.api_v1_invitecode_read(payload)
    return response.data
  }
)
export const api_v1_invitecode_update = createAsyncThunk(
  "inviteCodes/api_v1_invitecode_update",
  async payload => {
    const response = await apiService.api_v1_invitecode_update(payload)
    return response.data
  }
)
export const api_v1_invitecode_partial_update = createAsyncThunk(
  "inviteCodes/api_v1_invitecode_partial_update",
  async payload => {
    const response = await apiService.api_v1_invitecode_partial_update(payload)
    return response.data
  }
)
export const api_v1_invitecode_delete = createAsyncThunk(
  "inviteCodes/api_v1_invitecode_delete",
  async payload => {
    const response = await apiService.api_v1_invitecode_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const inviteCodesSlice = createSlice({
  name: "inviteCodes",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_invitecode_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_invitecode_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_invitecode_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_invitecode_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_invitecode_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_invitecode_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_invitecode_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_invitecode_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_invitecode_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_invitecode_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_invitecode_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_invitecode_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_invitecode_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_invitecode_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_invitecode_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_invitecode_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_invitecode_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_invitecode_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_invitecode_list,
  api_v1_invitecode_create,
  api_v1_invitecode_read,
  api_v1_invitecode_update,
  api_v1_invitecode_partial_update,
  api_v1_invitecode_delete,
  slice: inviteCodesSlice
}
