import express, { Express, json } from "express";
import { crud, user } from "./router";

const app: Express = express();
const port: number = 3001;
const host: string = 'localhost';
app.use(json());
app.use("/", user);
app.use("/user", user);
app.use("/crud", crud);

app.listen(port, () =>
  console.log(`listening on port:http://${host}:` + port)
);
