import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBook from "../features/books/AddBook";
import BooksView from "../features/books/BooksView";
import Navbar from "../layouts/Navbar";
import Error from "../pages/Error";
import Home from "../pages/Home";

const Index = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show-books" element={<BooksView />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </Router>
  );
};

export default Index;
