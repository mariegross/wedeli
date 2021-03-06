import { collection } from "./database.js";

export const getRecipes = async () => {
  const cursor = collection("recipes").find();
  return await cursor.toArray();
};

// export const getHistoryMatches = async (accountId: string) => {
//   const Matches = await getMatchesCollection();
//   const matches = await Matches.find({ accountId })
//     .sort({ gameCreatedAt: -1 })
//     .limit(20)
//     .toArray();

//   return matches;
// };

// exports.getRecipes = getRecipes;
