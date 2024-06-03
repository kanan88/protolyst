import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  currentId: 0,
};

let nextMessageId = 0;

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    createMessage: {
      prepare(message) {
        return {
          payload: {
            message,
            id: ++nextMessageId,
          },
        };
      },
      reducer(state, action) {
        state.messages = [...state.messages, action.payload];
        state.currentId = nextMessageId;
      },
    },
    removeMessage(state, action) {
      state.messages = state.messages.filter(
        (message) => message.id !== action.payload
      );
    },
  },
});

export const { createMessage, removeMessage } = messageSlice.actions;

export default messageSlice.reducer;
