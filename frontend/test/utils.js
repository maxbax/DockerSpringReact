import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';

const wait = (ms = 100) => new Promise((res) => { setTimeout(res, ms); });

const renderActWait = async (el) => {
  let renderResult;
  await act(async () => {
    renderResult = render(el);
    await wait();
  });
  return renderResult;
};

export {
  wait,
  renderActWait,
};
