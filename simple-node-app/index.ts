import app from "./app";
import { Request, Response } from 'express';

app.get('/', async (req : Request, res : Response) => {
    res.send("Welcome to the Testy Project!");
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));