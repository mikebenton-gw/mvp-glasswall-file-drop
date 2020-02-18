import {verifyApi} from "../api/verifyApi";

async function validKey(apikey) {
    await verifyApi.verifyApiKey(apikey);
    
    return true;
}

export const keyActions = {
    validKey
  };
  