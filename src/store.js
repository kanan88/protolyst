import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './features/messages/messageSlice';

const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});

export default store;
