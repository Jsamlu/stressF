import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  Acts: [],
};

export const actSlice = createSlice({
  name: "ActivityState",
  initialState,
  reducers: {
    setActivity: (state, action) => {
      
      state.Acts.push({ id: nanoid(), ...action.payload });
    },
    removeActivity: (state, action) => {
        state.Acts = state.Acts.filter((Act)=>Act.id !== action.payload);
    },
  },
});

export const { setActivity, removeActivity } = actSlice.actions;
const ActivityReducer = actSlice.reducer;
export default ActivityReducer;
