import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "StateLogin",
  initialState: {
    stateLogin: false,
    idUser: "",
    nameUser: "User"
  },

  reducers: {
    updateUser: (state, action) => {
      state.stateLogin = action.payload.stateLogin;
      state.idUser = action.payload.idUser;
      state.nameUser = action.payload.nameUser;
    },
  },
});

export const { updateUser } = loginSlice.actions;
export default loginSlice.reducer;
