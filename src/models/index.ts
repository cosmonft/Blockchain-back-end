import { Sequelize } from "sequelize";
import { commentMessagesModel } from "./commentMessages";
import { followMessagesModel } from "./followMessages";
import { userModel } from "./users";
import { getEnvVars } from "src/utils/misc";

export async function getDbConnector() {
    try {
        const dbKeys = getEnvVars([
            "user", "pass", "host", 
            "port", "name"]) as String[];
        const dbAuth = `${dbKeys[0]}:${dbKeys[1]}`
        const dbUrl = `${dbKeys[2]}:${dbKeys[3]}`

        const sequelize = new Sequelize(
            `postgres://${dbAuth}@${dbUrl}/${dbKeys[4]}`
        );
        
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        const User = await userModel(sequelize);
        const CommentMessages = await commentMessagesModel(sequelize);
        const FollowMessages = await followMessagesModel(sequelize);

        console.log(`User: ${User === sequelize.models.User}\n`)
        console.log(`CommentMessages: \
            ${CommentMessages === sequelize.models.CommentMessages}\n`);
        console.log(`FollowMessages: \
            ${FollowMessages === sequelize.models.FollowMessages}\n`)

        return sequelize;
    } catch (err) {
        console.error(err);
    }
}
