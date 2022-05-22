require(`dotenv`).config();
const Sequelize = require(`sequelize`);
const { DATABASE_URL } = process.env;

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: `postgres`,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
});

// Functions

const welcome = (req, res) => res.sendStatus(200);

const getTopFiveRecords = (req, res) => {
  sequelize
    .query(
      `
    SELECT * FROM records
    ORDER BY run_time
    LIMIT 5;
    `
    )
    .then((dbRes) => res.status(200).send(dbRes[0]))
    .catch((err) => res.status(400).send(err));
};

const addUserScore = (req, res) => {
  let { name, runTime } = req.body;

  name = name.replace(/'/g, `''`);

  sequelize
    .query(
      `
  INSERT INTO records
  (name, run_time)
  VALUES 
  ('${name}', '${runTime}');
  `
    )
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(400).send(err));
};

module.exports = {
  welcome,
  getTopFiveRecords,
  addUserScore
};
