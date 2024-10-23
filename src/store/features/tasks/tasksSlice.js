import { getTasks } from "@/app/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: false,
  error: "",
};

const fetchTasks = createAsyncThunk("tasks", async () => {
  return await getTasks();
});
export const tasksReduser = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTasks: (state, action) => {
      state.data.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { addTasks } = tasksReduser.actions;

export default tasksReduser.reducer;
