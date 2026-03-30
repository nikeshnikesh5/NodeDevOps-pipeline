const express = require("express");
const client = require("prom-client");

const app = express();

const counter = new client.Counter({
  name: "http_requests_total",
  help: "Total HTTP Requests"
});

app.use((req, res, next) => {
  counter.inc();
  next();
});

app.get("/", (req, res) => {
  res.send(" DEvops PIPE LINE TEST");
});

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(3000, () => console.log("Running on 3000"));