const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
require('dotenv').config();

const restraunt = require('./routers/restraunts');

const app = express();

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// apis
app.use('/api/v1/restraunts', restraunt);



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
