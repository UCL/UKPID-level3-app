const getRequest = async (path) => {
  const res = await fetch(path, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const json = await res.json();
  return json;
};

const postRequest = async (path, body) => {
  const res = await fetch(path, {
    method: 'POST',
    body: body,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const json = await res.json();
  return json;
}

export { getRequest, postRequest };
