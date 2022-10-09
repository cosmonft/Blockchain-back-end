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

const updateSent = async (
    sequelizer: Sequelize,
    messageId: string
    ) => {
        try {
            console.log('Updating `sent` column...\n');
            await sequelizer.query(`
                UPDATE sent
                FROM comment_messages
                WHERE sent = false  
                    AND message_id = ${messageId}
            `)
        } catch (err) {
            console.error(err);
        }
    }

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
            payload['profile_id_pointed']
        )
        pushResult === true
        ? await updateSent(connector, payload['message_id'])
        : null;
    }
};
