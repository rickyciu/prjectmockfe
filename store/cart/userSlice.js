import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");

const initialState = {
  player: [],
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getPlayer: (state, action) => {
      state.player = action.payload;
    },
    updatescore: (state, action) => {
      state.player.skor = action.payload;
    },
    updateplayer: (state, action) => {
      state.player = action.payload;
    },
    loading: (state, action) => {
      state.isLoading = !state.isLoading;
    },
    isplayed:(state,action)=>{
      state.player.isplayed = true;
    }
  },
});

export const getPlayerAsync = (id) => async (dispatch) => {
  try {
    const player = await axios(
      "http://localhost:3001/profile/"+id,
    );
    dispatch(getPlayer(player.data));
  } catch (err) {
    alert("Axios Error , Can't Get User Data");
  }
};

export const { getPlayer, updatescore, updateplayer, loading , isplayed} =
  userSlice.actions;

export default userSlice.reducer;
