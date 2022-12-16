import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const numberofBooks = useSelector((state) => state.booksReducer.books.length);

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: numberofBooks + 1, title, author };
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
