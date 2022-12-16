import { configureStore } from "@reduxjs/toolkit";
import BooksSlice from "../features/books/BooksSlice";

const store = configureStore({
  reducer: {
    booksReducer: BooksSlice,
  },
});
