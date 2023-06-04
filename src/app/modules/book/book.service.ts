import { IBook } from "./book.interface";
import { Book } from "./book.model";



export const getFantasyBookToDB = async () => {
  const books = await Book.find({ genre: "Fantasy" });
  return books;
}

export const getSciByRoliToDB = async () => {
  // const books = await Book.aggregate([
  //   { $match: { genre: "Sci-Fi" } },
  //   { $match: { 'publisher.name': "Roli Books" } },
  // ]);
  const books = await Book.find({
    $and: [{ genre: "Sci-Fi" }, { "publisher.name": "Roli Books" }]
  })

  return books;
}
export const categorizedFromDB = async () => {
  const result = await Book.useCategorized();
  // console.log(result);
  return result;
}
export const stringToIntFromToDB = async () => {
  const result = await Book.aggregate([
    { $match: { publicationYear: { $gt: 2020 } } },
    {
      $addFields: {
        price: {
          $toInt: "$price"
        }
      }
    }
  ]);
  return result;
}