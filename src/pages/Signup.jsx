import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

function Signup() {
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");


 

  function handleSubmit(e) {
    e.preventDefault();
    console.log(fullName, email, password);

    

    axios.post(`http://localhost:8000/user`, {
      fullName,
      email,
      password,
    });
  }

  return (
    <div className="container mt-5">
      <Form className="bg-dark" onSubmit={handleSubmit}>
        <h1 className="text-light">Sign Up</h1>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" className="mt-3" style={{ width: "100%" }}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
