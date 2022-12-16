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
  },
});

export const { showBooks, addBook } = bookSlice.actions;
export default bookSlice.reducer;
