const urlPrefix = 'https://72zql7ms4e.execute-api.eu-west-1.amazonaws.com/beta'
const verifySuffix = '/verify';

const verifyApiKey = (apikey) => {
    var url = urlPrefix + verifySuffix;
    return callVerify(url, apikey);
}

const callVerify = (url, apikey) => {
  const promise = new Promise((resolve, reject) => {
      resolve(fetch(url, {
        method: 'GET',
        headers: {
          "x-api-key": apikey
        }
      })
      .then ((response) => {
        if (response.ok) {
          return true;
        }
        else{
          if (response.status === 429){
            return "Api Key has run out of requests"
          }
          
          return "Api Key is invalid";
        }
      }));
  });

  return promise;
}

export const verifyApi = {
  verifyApiKey
};
