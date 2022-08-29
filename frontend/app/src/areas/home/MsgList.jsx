import React, { useEffect, useState } from 'react';
import { Alert, ListGroup } from 'react-bootstrap';
import { getMsgs } from '../../api/msg';

const MsgList = () => {
  const [msgList, setMsgList] = useState([]);

  useEffect(() => {
    getMsgs()
      .then((data) => {
        setMsgList(data);
      });
  }, []);

  return (
    <div className="App">
      {msgList.length === 0 && <Alert variant="warning">No messages!!!</Alert>}
      <ListGroup>
        {msgList.map(({ msgId, title, message }) => (
          <ListGroup.Item key={msgId}>
            {title}: {message}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default MsgList;
