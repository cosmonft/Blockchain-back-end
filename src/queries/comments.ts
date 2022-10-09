import { Sequelize } from "sequelize";
import { pushNotification } from "../epns";
import { getDbConnector } from "../models";
import { updateSent } from "./share";

const getFollows = async (sequelizer: Sequelize) => {
    try {
        console.log('Querying comment_messages table...\n'); 
        const [results, _] = await sequelizer.query(`
            SELECT *
            FROM comment_messages
            WHERE sent = false
        `);
        return results;
    } catch (err) {
        console.error(err);
    }
};

export const sendCommentNotifications = async  () => {
    const connector = await getDbConnector() as Sequelize;
    const queryResults = await getFollows(connector) || [];
    for (let i=0; i < queryResults.length; i++) {
        let payload: any = queryResults[i];
        const pushResult = await pushNotification(
            "New comment!",
            payload['content_uri'],
            `New comment by ${payload['profile_id']}`,
            payload['content_uri'],
            "0x80d0bcfb103bD2B03cba953D394c6cb308F13335"
        )
        pushResult === true
        ? await updateSent(
            connector, 
            payload['message_id'],
            "comment_messages")
        : null;
    }
};
