import express, { Express, Request, Response } from "express";

const app: Express = express();

const PORT = 4000;

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Started on http://localhost:${PORT}`);
});
