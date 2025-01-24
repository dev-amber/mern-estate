import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';

// Configure the Redux store
export const store = configureStore({
  reducer: {
    user: userReducer// Add the user slice reducer under the "user" state key
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for specific use cases
    }),
});
