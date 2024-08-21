const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

let mongoServer;

const startDatabase = async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  if (!uri) {
    throw new Error('Failed to get MongoDB URI');
  }

  await mongoose.connect(uri);

  console.log('Connected to in-memory MongoDB');
};

const stopDatabase = async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
};

module.exports = { startDatabase, stopDatabase };
