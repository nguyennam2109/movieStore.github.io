const path = require('path')
const express = require('express')


const app = express();
const PORT = process.env.DB_PORT || 3000
console.log(PORT)
app.listen(PORT, () => {
  console.log('server started at http://localhost:'+PORT);
});