import {fileTypeDetectionApi} from "../api/fileTypeDetectionApi";
import {statusEnum} from "../enums/statusEnum";

const unsupportedTypes = [
    "Unknown",
    "FileIssues",
    "BufferIssues",
    "InternalIssues",
    "LicenseExpired",
    "PasswordProtectedOpcFile"
  ];

const validFileSize = file => {
    if (file.size > 20000000) {
        return false;
    }
    return true;
}

async function validFileType(apikey, file) {
    var result = await fileTypeDetectionApi.getFileType(apikey, file);

    if (result.Status === statusEnum.status.LIMITREACHED || result.Status === statusEnum.status.INVALIDKEY){
        return {
            Result: false,
            Message: result.Message
        }
    }
    
    if(unsupportedTypes.includes(result.fileType)) {
        return {
            Result: false,
            Message: "Please use a supported file type"
        }
    }

    return {Result: true};
}

export const fileActions = {
    validFileSize,
    validFileType
  };
  