import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Request, Response } from "express";
import { Routes }  from "./routes";

const app = express()
const port = 3000

app.use(cors())
//app.use(bodyParser.json()); 


Routes.forEach(async (route: any) => {
  (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
      const result = (new (route.controller as any))[route.action](req, res, next);
      if (result instanceof Promise) {
          result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

      } else if (result !== null && result !== undefined) {
          res.json(result);
      }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})