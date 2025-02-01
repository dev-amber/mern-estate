import {createSlice} from "@reduxjs/toolkit"


const initialState = {
  currentUser:  null, 
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers:{
    signInStart:(state)=>{
      state.loading=true;
      
    },
    signInSuccess:(state,action)=>{
      state.currentUser=action.payload;
      state.loading=false;
      state.error=null;
    },

    signInFailure:(state,action)=>{
      state.currentUser=action.payload;
      state.loading=false;
    },
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser=action.payload;
      state.loading=false;
      state.error=null;
    },
    updateUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    
    deleteUserStart:(state)=>{
      state.loading = true;
    },
    deleteUserSuccess:(state,action)=>{
      state.currentUser=null;
      state.loading=false;
      state.error=null;
    },
    deleteUserFailure:(state,action)=>{
      state.loading = false;
      state.error = action.payload;
    },
    signOutUserStart:(state)=>{
      state.loading = true;
    },
    signOutUserSuccess:(state,action)=>{
      state.currentUser=null;
      state.loading=false;
      state.error=null;
    },
    signOutUserFailure:(state,action)=>{
      state.loading = false;
      state.error = action.payload;
    },

  }
})

export const{signInStart,
  signInFailure,
  signInSuccess,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserFailure,
  deleteUserSuccess,
  signOutUserFailure,
  signOutUserSuccess,
  signOutUserStart,

}=userSlice.actions;

export default userSlice.reducer;