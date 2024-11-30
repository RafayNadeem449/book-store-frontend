import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function DeleteBookTable() {
  let [bookData, setBookData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/book").then((res) => {
      setBookData(res.data);
    });
  }, [bookData]);

  function deleteBook(id) {
    axios.delete(`http://localhost:8000/book/${id}`);
  }

  return (
    <div className="mt-5">
      <Table striped bordered hover size="sm" className=" bg-dark">
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author Id</th>
            <th>Book Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {bookData?.map((book) => {
            return (
              <tr>
                <td>{book.title}</td>
                <td>{book.authorId}</td>
                <td>${book.price}</td>
                <td>
                  <Button variant="danger" onClick={()=>deleteBook(book._id)}>Remove Item</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default DeleteBookTable;
