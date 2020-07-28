"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.get("/", (_req, res) => {
    res.send("Hello World");
});
app.get("/datetime", (_req, res) => {
    res.send(new Date());
});
app.post("/create", (req, res) => {
    res.send("Post Data: " + req.body);
});
app.put("/update", (req, res) => {
    res.send("Update Data: " + req.body);
});
app.delete("/delete/:id", (req, res) => {
    res.send("Delete Param  " + JSON.stringify(req.params));
});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
