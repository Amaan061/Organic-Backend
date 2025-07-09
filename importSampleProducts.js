require('dotenv').config();
const connectDB = require('./config/db');
const importSampleProducts = require('./config/sampleProducts');

const run = async () => {
  await connectDB();
  await importSampleProducts();
};

run();
