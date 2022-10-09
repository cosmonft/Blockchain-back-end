import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";
import { getEnvVars } from "../utils/misc";

export async function pushNotification(
    title: string, 
    body: any, 
    payloadTitle: string, 
    payloadBody: any,
    targetAddress: string
) {
    try {
    const privateKey = getEnvVars("channel_pk") as string;
    const signer = new ethers.Wallet(privateKey);
    
    const apiResponse = await PushAPI.payloads.sendNotification({
        signer,
        type: 3, // target
        identityType: 2, // direct payload
        notification: {
            title: title,
            body: body,
            },
        payload: {
            title: payloadTitle,
            body: payloadBody,
            cta: '',
            img: ''
            },
        recipients: `eip155:5:${targetAddress}`, // recipient address
        channel: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // your channel address
        env: 'staging'
    });
    const result = apiResponse?.status === 204 ? "Successfull" : "Failed";
    console.log(`API response: ${result}`);
    } catch (err) {
        console.error(err);
    }
};
