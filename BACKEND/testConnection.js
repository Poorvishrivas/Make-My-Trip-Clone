require("dotenv").config();
const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

async function testConnection() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to database successfully!");
  } catch (err) {
    console.error("Connection failed:", err);
  } finally {
    await client.close();
  }
}

testConnection();
