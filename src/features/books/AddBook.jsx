import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "./BooksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const numberofBooks = useSelector((state) => state.booksReducer.books.length);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: numberofBooks + 1, title, author };
    dispatch(addBook(book));
    navigate("/show-books",{replace: true});
  };
  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="Author">Author: </label>
          <input
            type="text"
            id="Author"
            name="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
