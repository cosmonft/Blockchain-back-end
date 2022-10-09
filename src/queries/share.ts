import { Sequelize } from "sequelize";

export const updateSent = async (
    sequelizer: Sequelize,
    messageId: string,
    tableName: string
    ) => {
        try {
            console.log(`Updating ${tableName} column...\n`);
            await sequelizer.query(`
                UPDATE ${tableName}
                SET sent = true
                WHERE message_id = ${messageId}
            `)
        } catch (err) {
            console.error(err);
        }
    };
