import express, {Request, response, Response} from "express";

const app = express();

app.get("/", (request: Request, response: Response) => {
    response.send("Hello world")
})

app.listen(3333);