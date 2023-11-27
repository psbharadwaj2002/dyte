require("dotenv").config();
const PORT = 3000;
const MONGO_URL = process.env.MONGO_DB_URL;

const errMessage = (type) => {
  console.log(
    ` \n ****************************************** ERROR ****************************************** \n\n\t\t\t\t`,
    `${type.message}`,
    ` \n\n ****************************************** ERROR ****************************************** \n`
  );
};

module.exports = {
  PORT,
  MONGO_URL,
  errMessage,
};
