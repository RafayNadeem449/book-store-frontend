import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Header.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  let [userPermission, setUserPermission] = useState();

  let navigate = useNavigate();

  function logoutUser() {
    // localStorage.setToken("token", "");
    // localStorage.setToken("user", "");
    // localStorage.setToken("name", "undefined");
    // localStorage.setToken("role", "");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    setUserPermission(null); // Update the state to reflect the logout
    //  window.location.href = "/login"
    navigate("/login");
  }

  useEffect(() => {
    setUserPermission(localStorage.getItem("role"));
  }, []);

  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Book Store</Navbar.Brand>

        <Nav className="me-auto flexList">
          <Link to="/" className="navClass">
            Home
          </Link>
          {userPermission == "USER" || userPermission== "ADMIN" ? (
            <>
              <Link to="/authors" className="navClass">
                Authors
              </Link>
              <Link to="/books" className="navClass">
                Books
              </Link>
            </>
          ) : null}
          <Link to="/login" className="navClass">
            Login
          </Link>
          <Link to="/signup" className="navClass">
            Signup
          </Link>

          {userPermission == "ADMIN" ? (
            <>
              <Link to="/addBook" className="navClass">
                Add Book
              </Link>
              <Link to="/deleteBook" className="navClass">
                Delete Book
              </Link>
            </>
          ) : null}
          <Button className="navClass" onClick={logoutUser}>
            Log Out
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}
