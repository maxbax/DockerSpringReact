import React from 'react';
import { Stack, Container } from 'react-bootstrap';
import AddMsg from './areas/home/AddMsg';
import MsgList from './areas/home/MsgList';

const App = () => (
  <Container>
    <Stack gap={2}>
      Welcome !!!
      <MsgList />
      <AddMsg />
    </Stack>
  </Container>
);

export default App;
