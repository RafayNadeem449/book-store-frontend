import Table from "react-bootstrap/Table";
import axios from "axios";
import { useState, useEffect } from "react";

function AuthorTable() {
  const [authorData, setAuthorData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/user")
      .then((res) => {
        const adminUsers = res.data.filter((user) => user.role == "ADMIN");
        setAuthorData(adminUsers);
      })
      .catch((res) => console.log(res.data));
  }, []);

  console.log(authorData);

  return (
    <div className="mt-5">
      <Table striped bordered hover size="sm" className=" bg-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <td>Role</td>
            <td>Books Added</td>
          </tr>
        </thead>
        <tbody>
          {authorData.map((admin) => {
            return (
              <tr>
                <td>{admin._id}</td>
                <td>{admin.fullName}</td>
                <td>{admin.email}</td>
                <td>{admin.role}</td>
                <td>{admin.books.length}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default AuthorTable;
