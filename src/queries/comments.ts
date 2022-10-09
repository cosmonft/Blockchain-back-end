import { Sequelize } from "sequelize";
import { pushNotification } from "../epns";
import { getDbConnector } from "../models";

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
    const connector = await getDbConnector();
    const queryResults = await getFollows(connector as Sequelize) || [];
    for (let i=0; i < queryResults.length; i++) {
        let payload: any = queryResults[i];
        await pushNotification(
            "New comment!",
            payload['content_uri'],
            `New comment by ${payload['profile_id']}`,
            payload['content_uri'],
            payload['profile_id_pointed']
        )
    }
};
