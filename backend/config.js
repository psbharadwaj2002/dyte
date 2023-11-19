const PORT = 3000;
const MONGO_URL =
  "mongodb+srv://dyte_root:dyte_root@dyte-task.6zjpelt.mongodb.net/logs?retryWrites=true&w=majority";

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
