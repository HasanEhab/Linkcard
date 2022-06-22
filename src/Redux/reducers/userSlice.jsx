import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    users: [],
    savedUsers: [],
  },
  reducers: {
    addUsers: (state, action) => {
      state.users = action.payload;
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id != action.payload);
    },
    saveUser: (state, action) => {
      let saveState = state.savedUsers.filter(
        (user) => user.id == action.payload.id
      );
      if (!saveState.length) {
        state.savedUsers.push(action.payload);
        state.savedUsers = state.savedUsers.sort((a, b) => a.age - b.age);
      }
    },
    deleteSavedUser: (state, action) => {
      state.savedUsers = state.savedUsers.filter(
        (user) => user.id != action.payload
      );
    },
  },
});

export const { addUsers, deleteUser, saveUser, deleteSavedUser } =
  userSlice.actions;
export default userSlice.reducer;
