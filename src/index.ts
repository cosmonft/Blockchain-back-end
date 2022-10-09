import { sendCommentNotifications } from "./queries";
import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.post('/add-address', (req: Request, res: Response) => {
    res.send({
        message: "Sending message to server"
    });
})

const main = async () => {
    await sendCommentNotifications();
} 

main();

app.listen(3000, () => {
    console.log("server running")
})
