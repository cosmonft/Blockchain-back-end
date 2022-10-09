import { sendCommentNotifications } from "./queries";

const main = async () => {
    await sendCommentNotifications();
} 

main();
