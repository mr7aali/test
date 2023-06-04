import { Schema, model } from "mongoose";
import { BookModel, IBook } from "./book.interface";

const bookSchema = new Schema<IBook>({
    title: {
        type: String,
        required: true,

    },
    author: {
        type: [String],
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    publicationYear: {
        type: Number,
        required: true,
    },
    publisher: {
        name: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
    },
    reviews: [{
        user: {
            type: String,
            required: true,
        },
        comment: {
            type: String,
            required: true,
        }
    }],

    rating: {
        type: Number,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
   
});


bookSchema.static('useCategorized', async function useCategorized() {

    const featuredBooks = await Book.find({ rating: { $gte: 4 } });
    const booksWithFeaturedField = featuredBooks.map((book) => {
        if (book.rating > 4.5) {
            return { ...book.toObject(), featured: "BestSeller" };
        } else {
            return { ...book.toObject(), featured: "Popular" };
        }
    });

    return booksWithFeaturedField;

});

export const Book = model<IBook, BookModel>('Book', bookSchema);
