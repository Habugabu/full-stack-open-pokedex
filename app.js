const express = require("express");
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

app.get("/version", (_req, res) => {
  res.send("1");
});

// eslint-disable-next-line no-unused-vars
app.get("/health", (_req, _res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw "error...  ";
  // res.send("ok");
});

app.use(express.static("dist"));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`);
});
