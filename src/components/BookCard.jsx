import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useState } from "react";

function BookCard() {
  const [bookData, setBookData] = useState([]);

  axios.get("http://localhost:8000/book").then((res) => {
    setBookData(res.data);
  });

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {bookData.map((book) => {
          return (
            <>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Title>Book Author</Card.Title>
                  <Card.Text>{book.description}</Card.Text>
                  <Card.Text>${book.price}</Card.Text>
                  <Button variant="primary">Buy Now</Button>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
}

export default BookCard;
