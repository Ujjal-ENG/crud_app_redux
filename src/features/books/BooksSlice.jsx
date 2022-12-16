import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    { id: 1, title: "Kopa America Cup", author: "Ujjal Kumar Roy" },
    { id: 2, title: "Kopa Bangladesh Cup", author: "Ador Kumar Roy" },
  ],
};

const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },

    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },

    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isBookExits = state.books.filter((book) => book.id === id);
      if (isBookExits) {
        isBookExits[0].title = title;
        isBookExits[0].author = author;
      }
    },
  },
});

export const { showBooks, addBook, deleteBook,updateBook } = bookSlice.actions;
export default bookSlice.reducer;
