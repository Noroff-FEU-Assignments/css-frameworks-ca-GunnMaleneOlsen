import { render } from "@testing-library/react";
import React from "react";
import { Button, Card } from "react-bootstrap";

function Cards() {
  /*let id = document.getElementById("1");

  var mdWidth = window.matchMedia("(max-width: 768px)");

  function changeColor(mdWidth) {
    if (mdWidth.matches) {
      // If media query matches
      document.body.style.backgroundColor = "yellow";
    } else {
      document.body.style.backgroundColor = "pink";
    }
  }

  changeColor(mdWidth);

  mdWidth.addEventListener(changeColor);
  */
  return (
    <div className="news__cards">
      <Card id="1" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="News images/news-1.jpg" />
        <Card.Body>
          <Card.Title>Nunc porttitor vel</Card.Title>
          <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
          <Button variant="primary">
            MORE
            <div className="btn-primary--syle-animation"></div>
          </Button>
        </Card.Body>
      </Card>
      <Card id="2" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="News images/news-2.jpg" />
        <Card.Body>
          <Card.Title>Nunc porttitor vel</Card.Title>
          <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
          <Button variant="primary">
            MORE
            <div className="btn-primary--syle-animation"></div>
          </Button>
        </Card.Body>
      </Card>
      <Card id="3" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="News images/news-3.jpg" />
        <Card.Body>
          <Card.Title>Nunc porttitor vel</Card.Title>
          <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
          <Button variant="primary">
            MORE
            <div className="btn-primary--syle-animation"></div>
          </Button>
        </Card.Body>
      </Card>
      <Card id="4" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="News images/news-4.jpg" />
        <Card.Body>
          <Card.Title>Nunc porttitor vel</Card.Title>
          <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
          <Button variant="primary">
            MORE
            <div className="btn-primary--syle-animation"></div>
          </Button>
        </Card.Body>
      </Card>

      <Card id="5" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="News images/news-5.jpg" />
        <Card.Body>
          <Card.Title>Nunc porttitor vel</Card.Title>
          <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
          <Button variant="primary">
            MORE
            <div className="btn-primary--syle-animation"></div>
          </Button>
        </Card.Body>
      </Card>
      <Card id="6" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="News images/news-6.jpg" />
        <Card.Body>
          <Card.Title>Nunc porttitor vel</Card.Title>
          <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
          <Button variant="primary">
            MORE
            <div className="btn-primary--syle-animation"></div>
          </Button>
        </Card.Body>
      </Card>
      <Card id="7" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="News images/news-7.jpg" />
        <Card.Body>
          <Card.Title>Nunc porttitor vel</Card.Title>
          <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
          <Button variant="primary">
            MORE
            <div className="btn-primary--syle-animation"></div>
          </Button>
        </Card.Body>
      </Card>
      <Card id="8" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="News images/news-8.jpg" />
        <Card.Body>
          <Card.Title>Nunc porttitor vel</Card.Title>
          <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
          <Button variant="primary">
            MORE
            <div className="btn-primary--syle-animation"></div>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
