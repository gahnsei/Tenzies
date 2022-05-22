require(`dotenv`).config();
const express = require(`express`);
const cors = require(`cors`);
const app = express();

const ctrl = require(`./controller`);

app.use(express.json());
app.use(cors());

// Endpoints

app.get(`/api`, ctrl.welcome);
app.get(`/api/records`, ctrl.getTopFiveRecords);

app.post(`/api/records`, ctrl.addUserScore);

const { SERVER_PORT } = process.env;

app.listen(SERVER_PORT, () =>
  console.log(`Have You Boys Seen My Goyard Garments on ${SERVER_PORT}`)
);
