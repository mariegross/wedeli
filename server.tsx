/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const express = require("express");
const path = require("path");
const { connectToDb } = require("./lib/database");

// const {
//   insertUser,
//   getQuestionDoc,
//   insertResult,
//   getQuestions,

//   getResultsByQuestionID,
//   getResultAnswers,
//   checkUserID,
// } = require("./lib/databaseMethods");

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

async function run() {
  console.log("Connecting to Database");
  await connectToDb(process.env.DB_URL, process.env.DB_NAME);
  console.log("Connected to Database!");

  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
}

run();
