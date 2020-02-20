import {fileTypeDetectionApi} from "../api/fileTypeDetectionApi";
import {KeyStatus} from "../enums/keyStatusEnum";

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

    if (result.Status === KeyStatus.LIMITREACHED || result.Status === KeyStatus.INVALIDKEY){
        return {
            ValidKey: false,
            ValidFileType: false,
            Message: result.Message
        }
    }
    
    var message = await result.Message;

    if(unsupportedTypes.includes(message.fileType)) {
        return {
            ValidKey: true,
            ValidFileType: false,
            Message: "Please use a supported file type"
        }
    }

    return {
        ValidKey: true,
        ValidFileType: true,
        Message: "Valid file type used"
    };
}

export const fileActions = {
    validFileSize,
    validFileType
  };
  