import { configureStore } from '@reduxjs/toolkit';
import clockReducer from '../features/clock/clockSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    clock: clockReducer,
  },
});
