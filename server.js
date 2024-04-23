const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.sendFile('./index.html',{root:__dirname});
});
app.get('/academics', (req, res) => {
  res.sendFile('./academics.html',{root:__dirname});
});
app.listen(5000, () => {
  console.log(`Server is running on http://localhost:5000`)
})