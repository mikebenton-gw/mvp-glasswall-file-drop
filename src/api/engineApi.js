const urlPrefix = 'https://glasswall-file-drop-api.azurewebsites.net'
const analysisSuffix = '/api/sas/FileAnalysis';
const protectSuffix = '/api/sas/FileProtect';

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
        body: data
      })
      .then ((response) => {
        if (response.ok) {
          return response.json()
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
        body: data
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
