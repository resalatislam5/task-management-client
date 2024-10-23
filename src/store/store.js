import { configureStore } from "@reduxjs/toolkit";
import tasksReduser from "./features/tasks/tasksSlice";

const store = () => {
  return configureStore({
    reducer: {
      tasks: tasksReduser,
    },
  });
};

export default store;
