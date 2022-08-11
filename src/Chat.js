import { useEffect, useState } from 'react';
import MyMessage from './MyMessage';
import kio from './kio.jpg';

const Chat = ({ name }) => {
  const [allMessages, setAllMessages] = useState(['']);
  // eslint-disable-next-line
  useEffect(() => {
    setAllMessages(
      JSON.parse(window.localStorage.getItem('chat')),
      'from chat',
    );
  });
  return (
    <div className="chatBody">
      {allMessages.map((c, index) => {
        if (c.name === name) {
          return <MyMessage key={index} message={c.message} />;
        }
        return (
          <div key={index} className="avatar">
            <span>{c.message}</span>
            <span>
              <img src={kio} alt="user avater" />
            </span>
          </div>
        );
      })}
    </div>
  );
};
export default Chat;
