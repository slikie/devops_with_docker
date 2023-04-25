const buddyList = require('spotify-buddylist')
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()


const mongoURL = process.env.MONGODB_URL || 'mongodb+srv://';
const dbName = process.env.MONGODB_DATABASE_NAME || '';
const collectionName = process.env.MONGODB_COLLECTION_NAME || '';
let last_ts = 0


async function insertDocument(url, dbName, collectionName, document) {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const res = await collection.insertOne(document);
    console.log(res);
    client.close();
  } catch (err) {
    console.error(err);
  }
}

function timestampToLocalTime(ts) {
          let date = new Date(ts); // create a Date object
          let offset = 8 * 60; // your local time zone offset in minutes (GMT+8)
          let localTime = new Date(date.getTime() + offset * 60000); // add the offset to get local time
          return localTime
}

async function main() {
  try {
    const spDcCookie = process.env.SPOTIFY_COOKIE  || ''
    const { accessToken } = await buddyList.getWebAccessToken(spDcCookie)
    const friendActivity = await buddyList.getFriendActivity(accessToken)
    if (friendActivity) {
      let result = friendActivity.friends;
      for (let i = 0; i < result.length; i++) {
        j = result[i]
        if (j.timestamp > last_ts) {
          j.localtime = timestampToLocalTime(j.timestamp)
          console.log(j);
          insertDocument(mongoURL, dbName, collectionName, j);
          last_ts = j.timestamp
        }
      }
    }
  } catch (error) {
    console.log(error)
  }
}
main()
setInterval(() => main(), 1000 * 60*2)
