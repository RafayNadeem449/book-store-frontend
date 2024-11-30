import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [userData, setUserData] = useState("");
  let [token, setToken] = useState("");

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8000/login", {
        email,
        password,
      })
      .then((res) => {
        setUserData(res.data.user);
        setToken(res.data.token);
        // navigate("/");
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);
    localStorage.setItem("role", userData.role);
    localStorage.setItem("name", userData.fullName);
    localStorage.setItem("userId",userData._id)
  }, [userData]);

  console.log(userData.name);
  return (
    <div className="container mt-5">
      <Form className="bg-dark" onSubmit={handleSubmit}>
        <h1 className="text-light">Login</h1>
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
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
