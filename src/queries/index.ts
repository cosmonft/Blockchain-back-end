import { Sequelize } from "sequelize";
import { getDbConnector } from "../models";

const getFollows = async (sequelizer: Sequelize) => {
    try {
        console.log('Querying comment_messages table...\n'); 
        const [results, _] = await sequelizer.query(`
            SELECT *
            FROM comment_messages
            WHERE sent = false
        `);
        console.log(results);
    } catch (err) {
        console.error(err);
    }
};


const main = async  () => {
    const connector = await getDbConnector();
    await getFollows(connector as Sequelize);
}

main();
