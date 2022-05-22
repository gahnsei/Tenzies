require(`dotenv`).config();
const express = require(`express`);
const cors = require(`cors`);
const path = require("path");
const app = express();

const ctrl = require(`./controller`);

// Middleware

app.use(express.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, "../build")));

// Endpoints

app.get(`/api`, ctrl.welcome);
app.get(`/api/records`, ctrl.getTopFiveRecords);

app.post(`/api/records`, ctrl.addUserScore);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

const PORT = process.env.PORT || 4444;

app.listen(PORT, () =>
  console.log(`Have You Boys Seen My Goyard Garments on ${PORT}`)
);
