import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAdmin = createAsyncThunk("user/loginUser", async (inputs) => {
  try {
    const res = await axios.post("/api/localaccounts/loginadmin", inputs, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    localStorage.setItem("user", JSON.stringify(res.data.user));
    return res.data["user"];
  } catch (err) {
    console.log(err.response.data.error);
    throw new Error(err.response.data.error);
  }
});

export const logoutAdmin = createAsyncThunk("user/logoutUser", async () => {
  try {
    const res = await axios.get("/api/logout");
    localStorage.removeItem("user");
  } catch (err) {
    console.log(err.message);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false;
        //console.log('payload: ' + JSON.stringify(action.payload))
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.log(action.error.message);
        state.error = action.error.message;
      })
      .addCase(logoutAdmin.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(logoutAdmin.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.error = null;
      });
  },
});

export default userSlice.reducer;
