const urlPrefix = 'https://72zql7ms4e.execute-api.eu-west-1.amazonaws.com/beta'
const verifySuffix = '/verify';

const verifyApiKey = (apikey) => {
    var url = urlPrefix + verifySuffix;
    return callVerify(url, apikey);
}

const callVerify = (url, apikey) => {
  const promise = new Promise((resolve, reject) => {
      resolve(fetch(url, {
        method: 'Get',
        headers: {
          "x-api-key": apikey
        }
      })
      .then ((response) => {
        if (response.ok) {
          return response.json()
        }
        else{
          throw new Error('Api Key is Invalid');
        }
      }));
  });

  return promise;
}

export const verifyApi = {
  verifyApiKey
};
