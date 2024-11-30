import Carousel from "react-bootstrap/Carousel";

function HomeSlider(props) {
  return (
    <Carousel fade data-bs-theme="dark">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={props.img1}
          alt="First slide"
          width="100%"
          height="500px"
        />
        <Carousel.Caption>
          <h5>{props.label1}</h5>
          <p>{props.description1}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={props.img2}
          alt="Second slide"
          width="100%"
          height="500px"
        />
        <Carousel.Caption>
          <h5>{props.label2}</h5>
          <p>{props.description2}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={props.img3}
          alt="Third slide"
          width="100%"
          height="500px"
        />
        <Carousel.Caption>
          <h5>{props.label3}</h5>
          <p>{props.description3}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeSlider;
