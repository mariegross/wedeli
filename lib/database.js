import MongoClient from "mongodb";

let client;
let db;

export const connectToDb = async (url, dbName) => {
  client = await MongoClient.connect(url, { useUnifiedTopology: true });
  db = client.db(dbName);
};

export const closeDbConnection = () => {
  client.close();
};

export const collection = (name) => {
  return db.collection(name);
};

// export const getHistoryMatches = async (accountId: string) => {
//   const Matches = await getMatchesCollection();
//   const matches = await Matches.find({ accountId })
//     .sort({ gameCreatedAt: -1 })
//     .limit(20)
//     .toArray();

//   return matches;
// };
