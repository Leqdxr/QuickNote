import express from "express";

const app = express();

app.listen(5001, () => {
  console.log("The server has started on port 5001");
});
