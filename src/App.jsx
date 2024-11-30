import React from "react";
import Header from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import Author from "./pages/Author";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Footer from "./components/Footer";
import DeleteBook from "./pages/DeleteBook";
import AddBook from "./pages/AddBook";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/authors" Component={Author} />
        <Route path="/books" Component={Books} />
        <Route path="/addBook" Component={AddBook} />
        <Route path="/deleteBook" Component={DeleteBook} />

      </Routes>
      <Footer/>
    </>
  );
}
