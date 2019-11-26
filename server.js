const express = require ('express');
const dotenv = require ('dotenv');
// route file
const bookcamp = require ('./routes/bookcamp');

//load env var

dotenv.config ({path: './config/config.env'});

const app = express ();
//mount with routers
app.use ('/api/v1/bookcame', bookcamp);

const PORT = process.env.PORT || 5000;

app.listen (PORT, () => {
  console.log (
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
