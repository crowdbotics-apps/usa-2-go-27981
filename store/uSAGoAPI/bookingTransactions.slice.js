import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_bookingtransaction_list = createAsyncThunk(
  "bookingTransactions/api_v1_bookingtransaction_list",
  async payload => {
    const response = await apiService.api_v1_bookingtransaction_list(payload)
    return response.data
  }
)
export const api_v1_bookingtransaction_create = createAsyncThunk(
  "bookingTransactions/api_v1_bookingtransaction_create",
  async payload => {
    const response = await apiService.api_v1_bookingtransaction_create(payload)
    return response.data
  }
)
export const api_v1_bookingtransaction_read = createAsyncThunk(
  "bookingTransactions/api_v1_bookingtransaction_read",
  async payload => {
    const response = await apiService.api_v1_bookingtransaction_read(payload)
    return response.data
  }
)
export const api_v1_bookingtransaction_update = createAsyncThunk(
  "bookingTransactions/api_v1_bookingtransaction_update",
  async payload => {
    const response = await apiService.api_v1_bookingtransaction_update(payload)
    return response.data
  }
)
export const api_v1_bookingtransaction_partial_update = createAsyncThunk(
  "bookingTransactions/api_v1_bookingtransaction_partial_update",
  async payload => {
    const response = await apiService.api_v1_bookingtransaction_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_bookingtransaction_delete = createAsyncThunk(
  "bookingTransactions/api_v1_bookingtransaction_delete",
  async payload => {
    const response = await apiService.api_v1_bookingtransaction_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const bookingTransactionsSlice = createSlice({
  name: "bookingTransactions",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_bookingtransaction_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bookingtransaction_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_bookingtransaction_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bookingtransaction_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bookingtransaction_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_bookingtransaction_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bookingtransaction_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bookingtransaction_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_bookingtransaction_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bookingtransaction_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bookingtransaction_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_bookingtransaction_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bookingtransaction_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bookingtransaction_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_bookingtransaction_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bookingtransaction_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bookingtransaction_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_bookingtransaction_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_bookingtransaction_list,
  api_v1_bookingtransaction_create,
  api_v1_bookingtransaction_read,
  api_v1_bookingtransaction_update,
  api_v1_bookingtransaction_partial_update,
  api_v1_bookingtransaction_delete,
  slice: bookingTransactionsSlice
}
