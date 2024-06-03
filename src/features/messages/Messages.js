import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createMessage, removeMessage } from './messageSlice';

import Header from '../../components/Header';
import Main from '../../components/Main';

const Messages = () => {
  const inputEl = useRef(null);
  const [inputVal, setInputVal] = useState('');

  const dispatch = useDispatch();
  const { messages, currentId } = useSelector((store) => store.message);

  const handleClick = () => {
    if (!inputVal) return;

    dispatch(createMessage(inputVal));

    setTimeout(() => {
      dispatch(removeMessage(currentId + 1));
    }, 5000);

    inputEl.current.focus();
    setInputVal('');
  };

  return (
    <div className="app">
      <Header />
      <Main>
        <input
          className="message"
          type="text"
          ref={inputEl}
          value={inputVal}
          placeholder="Type a message..."
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button className="btn btn-ui" onClick={handleClick}>
          Send
        </button>
      </Main>

      <div className="message-container">
        {messages.map((m) => (
          <p key={m.id} className="message">
            {m.message}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Messages;
