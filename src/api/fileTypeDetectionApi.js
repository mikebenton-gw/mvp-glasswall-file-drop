const urlPrefix = 'https://glasswall-file-drop-detection-api.azurewebsites.net'
const fileTypeDetectionSuffix = '/api/sas/FileTypeDetection';

const getFileType = (file) => {
    var url = urlPrefix + fileTypeDetectionSuffix;
    return callFileTypeDetection(url, file);
}

const callFileTypeDetection = (url, file) => {
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

export const fileTypeDetectionApi = {
  getFileType
};
