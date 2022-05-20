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

const { PORT } = process.env;

app.listen(PORT, () =>
  console.log(`Have You Boys Seen My Goyard Garments on ${PORT}`)
);
