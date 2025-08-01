const express = require('express');
const visitRouter = require('./visit');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors()); 

app.use('/api/visit', visitRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
