const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
  getCompliment,
  getFortune,
  getGratitudePrompt,
  collectGratitude,
  displayGratitude,
  deleteGratitude,
  updateGratitude,
} = require("./controller");

//routes?
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/gratitude-prompt", getGratitudePrompt);
app.post("/api/gratitude", collectGratitude);
app.get("/api/gratitude-messages", displayGratitude);
app.delete(`/api/:index`, deleteGratitude);
app.put(`/api/gratitude/:index`, updateGratitude);

app.listen(4000, () => console.log("Server running on 4000"));
