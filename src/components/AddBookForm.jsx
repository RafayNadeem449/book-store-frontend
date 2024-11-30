import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBookForm() {
  let [img, setImg] = useState("");
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [price, setPrice] = useState("");
  let [authorId, setAuthorId] = useState("");

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:8000/book", {
      img,
      authorId,
      title,
      description,
      price,
    }).then(()=>{
      navigate("/book")
    });
  }

  return (
    <div className="container mt-5">
      <Form className="bg-dark" onSubmit={handleSubmit}>
        <h1 className="text-light">Add Book</h1>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add Book Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Book Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add Book Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Book Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add Book Author ID"
            value={authorId}
            onChange={(e) => setAuthorId(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Book Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add Book Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Book Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add Book Image"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" className="mt-3" style={{ width: "100%" }}>
          Add Book
        </Button>
      </Form>
    </div>
  );
}

export default AddBookForm;
