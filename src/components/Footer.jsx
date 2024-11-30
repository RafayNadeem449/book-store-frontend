import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./Footer.css";

function Footer() {
  return (
    <CardGroup className="bg-primary manageFooter">
      <Card className="bg-primary text-white">
        <Card.Body>
          <Card.Title>Privacy Policy</Card.Title>
          <Card.Text>
            We are best at providing the best privacy Policy
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="bg-primary text-white">
        <Card.Body>
          <Card.Title>Locations</Card.Title>
          <Card.Text>
            We are in Lahore, London, Melbourne, Manchester, New Delhi
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="bg-primary text-white">
        <Card.Body>
          <Card.Title>Contact Us</Card.Title>
          <Card.Text>
            Mail: uk@gmail.com
            <br />
            Number: 83883838388
            <br />
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default Footer;
