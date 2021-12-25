const httpService = (url) => {
  return fetch(url).then((rawResponse) => {
    if (rawResponse.ok) {
      return rawResponse.json();
    } else {
      throw new Error(rawResponse.status);
    }
  });
};

export default httpService;
