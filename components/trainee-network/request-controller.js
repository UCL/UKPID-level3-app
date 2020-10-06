const getRequest = async (path) => {
  try {
    const res = await fetch(path, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const error = !res.ok;
    const json = await res.json();
    return {json, error};
  } catch (err) {
    const error = true;
    return {err, error};
  }
};

const postRequest = async (path, body) => {
  const res = await fetch(path, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const json = await res.json();
  return json;
};

export { getRequest, postRequest };
