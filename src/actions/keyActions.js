import {verifyApi} from "../api/verifyKeyApi";
import {KeyStatus} from '../enums/keyStatusEnum';

async function validKey(apikey) {
    var status = await verifyApi.verifyApiKey(apikey);
    
    switch(status) {
        case KeyStatus.INVALIDKEY:
            return {
                ValidKey: false,
                Message: "Api Key is invalid"
            }
        case KeyStatus.LIMITREACHED:
            return {
                ValidKey: false,
                Message: "Api Key has run out of requests"
            }
        default:
            return {
                ValidKey: true,
                Message: "Key is valid"
            }
    }
}

export const keyActions = {
    validKey
  };
  