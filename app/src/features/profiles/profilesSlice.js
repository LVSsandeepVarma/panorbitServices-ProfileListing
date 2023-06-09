import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  value: [
    {
      profiles: [],
      selectedProfile: [],
      contactToBeMessaged: [],
      isloggedIn: true, 
    }
  ],
  status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    savedProfiles: (state, action) => {
      if (!state.value[0].profiles.length) {
        state.value[0].profiles.push(...action.payload);
      }
    },
    getUserProfile: (state, action) => {
      const displayedProfile = state.value[0].profiles.find(obj => obj.name === action.payload.name)
      state.value[0].selectedProfile[0] = displayedProfile
    },
    selectedProfile: (state) => {
      if (state.value[0].selectedProfile.length) {
        return state.value[0].selectedProfile
      }
    },
    getUserProfileForMessage: (state, action) => {
      const displayedProfile = state.value[0].profiles.find(obj => obj.name === action.payload.name)
      state.value[0].contactToBeMessaged[0] = displayedProfile
    },
    selectedProfileForMessage: (state) => {
      if (state.value[0].contactToBeMessaged.length) {
        return state.value[0].contactToBeMessaged
      }
    },
    logoutUser: (state)=>{
      state.value[0].isloggedIn = false
    },
  },
});

export const { savedProfiles, getUserProfile, selectedProfile, getUserProfileForMessage, selectedProfileForMessage, logoutUser, logStatus } = profileSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const profilesList = (state) => state.profiles.value[0].profiles;
export const selectedContact = (state) => state.profiles.value[0].selectedProfile;
export const contactToBeMessaged = (state) => state.profiles.value[0].contactToBeMessaged;
export const loginStatus = (state)=> state.profiles.value[0].isloggedIn;
// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.


export default profileSlice.reducer;
