const getMsgs = () => fetch('/msgs')
  .then((response) => response.json());

const postMsg = (data) => fetch('/msgs', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});

export {
  getMsgs,
  postMsg,
};
