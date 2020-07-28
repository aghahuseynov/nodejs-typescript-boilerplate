import express, { Request, Response } from "express";

const app = express();

const port = 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/datetime", (_req: Request, res: Response) => {
  res.send(new Date());
});

app.post("/create", (req: Request, res: Response) => {
  res.send("Post Data: " + req.body);
});

app.put("/update", (req: Request, res: Response) => {
  res.send("Update Data: " + req.body);
});

app.delete("/delete/:id", (req: Request, res: Response) => {
  res.send("Delete Param  " + req.params.id);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
