import {verifyApi} from "../api/verifyKeyApi";

async function validKey(apikey) {
    return await verifyApi.verifyApiKey(apikey);    
}

export const keyActions = {
    validKey
  };
  