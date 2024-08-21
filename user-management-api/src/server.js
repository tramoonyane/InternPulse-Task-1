// src/server.js

const app = require('./app');
const { startDatabase } = require('./config/db');

const PORT = process.env.PORT || 3000;

startDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to start the server', err);
});
