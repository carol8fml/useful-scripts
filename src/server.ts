/** Libs */
import express from "express";
import { Router, Request, Response } from "express";

/* Data */
import { Reset } from "./data/102023-reset";
import { Row } from "./data/102023-row.";

/* Functions */
import { compareArrays } from "./functions/compareArrays";

const app = express();
const route = Router();

app.use(express.json());

route.get("/common", (_req: Request, res: Response) => {
  const [commonElements, _] = compareArrays(Reset, Row);

  res.json({
    commonElements,
  });
});

route.get("/nonRepeated", (_req: Request, res: Response) => {
  const [_, nonRepeatedElements] = compareArrays(Reset, Row);

  res.json({
    nonRepeatedElements,
  });
});

app.use(route);

app.listen(3333, () => {
  console.log("Server running on port 3333");
});
