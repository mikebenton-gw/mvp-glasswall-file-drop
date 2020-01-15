const urlPrefix = 'https://glasswall-file-drop-detection-api.azurewebsites.net'
const fileTypeDetectionSuffix = '/api/sas/FileTypeDetection';

const getFileType = (file) => {
    var data = new FormData();
    data.append("file", file);

    var url = urlPrefix + fileTypeDetectionSuffix;
    return callFileTypeDetection(url, data);
}

const callFileTypeDetection = (url, data) => {
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

export const fileTypeDetectionApi = {
  getFileType
};
