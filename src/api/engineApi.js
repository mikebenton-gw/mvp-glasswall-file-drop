const urlPrefix = 'https://glasswall-file-drop-api.azurewebsites.net'
const analysisSuffix = '/api/sas/FileAnalysis';
const protectSuffix = '/api/sas/FileProtect';

const analyseFile = (file) => {
    var url = urlPrefix + analysisSuffix;
    return callFileAnalysis(url, file);
}

const protectFile = (file) => {
    var url = urlPrefix + protectSuffix;
    return callFileProtect(url, file);
}

const callFileAnalysis = (url, file) => {
  const promise = new Promise((resolve, reject) => {
      resolve(fetch(url, {
        method: 'POST',
        body: file
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

const callFileProtect = (url, file) => {
  const promise = new Promise((resolve, reject) => {
      resolve(fetch(url, {
        method: 'POST',
        body: file
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
