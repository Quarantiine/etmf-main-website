// /store/index.ts
import { configureStore } from '@reduxjs/toolkit';
// Import your reducers (e.g., counterSlice, userSlice)
import counterReducer from "./slices/counterSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add other reducers here
  },
});

// Export types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
