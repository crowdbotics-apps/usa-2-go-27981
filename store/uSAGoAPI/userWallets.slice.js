import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_userwallet_list = createAsyncThunk(
  "userWallets/api_v1_userwallet_list",
  async payload => {
    const response = await apiService.api_v1_userwallet_list(payload)
    return response.data
  }
)
export const api_v1_userwallet_create = createAsyncThunk(
  "userWallets/api_v1_userwallet_create",
  async payload => {
    const response = await apiService.api_v1_userwallet_create(payload)
    return response.data
  }
)
export const api_v1_userwallet_read = createAsyncThunk(
  "userWallets/api_v1_userwallet_read",
  async payload => {
    const response = await apiService.api_v1_userwallet_read(payload)
    return response.data
  }
)
export const api_v1_userwallet_update = createAsyncThunk(
  "userWallets/api_v1_userwallet_update",
  async payload => {
    const response = await apiService.api_v1_userwallet_update(payload)
    return response.data
  }
)
export const api_v1_userwallet_partial_update = createAsyncThunk(
  "userWallets/api_v1_userwallet_partial_update",
  async payload => {
    const response = await apiService.api_v1_userwallet_partial_update(payload)
    return response.data
  }
)
export const api_v1_userwallet_delete = createAsyncThunk(
  "userWallets/api_v1_userwallet_delete",
  async payload => {
    const response = await apiService.api_v1_userwallet_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const userWalletsSlice = createSlice({
  name: "userWallets",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_userwallet_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_userwallet_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_userwallet_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_userwallet_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_userwallet_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_userwallet_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_userwallet_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_userwallet_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_userwallet_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_userwallet_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_userwallet_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_userwallet_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_userwallet_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_userwallet_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_userwallet_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_userwallet_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_userwallet_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_userwallet_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_userwallet_list,
  api_v1_userwallet_create,
  api_v1_userwallet_read,
  api_v1_userwallet_update,
  api_v1_userwallet_partial_update,
  api_v1_userwallet_delete,
  slice: userWalletsSlice
}
