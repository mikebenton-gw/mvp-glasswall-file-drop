const urlPrefix = ' https://24dyhnzh5h.execute-api.eu-west-2.amazonaws.com'
const analysisSuffix = '/Beta/az/fileanalysis/analyse';
const protectSuffix = '/Beta/az/filerebuild/rebuild';
const apiKey = 'fw9vUniTYY3bEnO7xYPqU5sYnP8iYYyA4V9epdu8'

const analyseFile = (file) => {
    var data = new FormData();
    data.append("file", file);

    var url = urlPrefix + analysisSuffix;
    return callFileAnalysis(url, data);
}

const protectFile = (file) => {
    var data = new FormData();
    data.append("file", file);

    var url = urlPrefix + protectSuffix;
    return callFileProtect(url, data);
}

const callFileAnalysis = (url, data) => {
  const promise = new Promise((resolve, reject) => {
      resolve(fetch(url, {
        method: 'POST',
        body: data,
        headers: {
          "x-api-key" : apiKey
        } 
      })
      .then ((response) => {
        if (response.ok) {
          return response.text()
        }
        else{
          throw new Error('Something went wrong');
        }
      }));
  });

  return promise;
}

const callFileProtect = (url, data) => {
  const promise = new Promise((resolve, reject) => {
      resolve(fetch(url, {
        method: 'POST',
        body: data,
        headers: {
          "x-api-key" : apiKey
        }
      })
      .then ((response) => {
        if (response.ok) {
          return response.blob()
        }
        else{
          throw new Error('Something went wrong');
        }
      }));
  });

  return promise;
}

export const engineApi = {
  analyseFile,
  protectFile,
};
