import React from "react";
import { Button, Card } from "react-bootstrap";

function Cards() {

  //attempted to add class .card--Show on the cards element based on screen width but did not hve enough time to figgure out
 /* //var cardId = [];

  let Cards = document.querySelectorAll(".card");

  let cardArray = Array.from(Cards);
  console.log(cardArray);
  for (var index = 0; index < cardArray.length; index++) {
    if (index > 4){
      cardArray.classList.add("card--show");
    }
    console.log(cardArray[index]);
  }

  let widthMatch = window.matchMedia("(max-width: 768px)");
  // mm in the function arg is the matchMedia object, passed back into the function
  widthMatch.addEventListener("change", function (mm) {
    if (mm.matches) {
      // If media query matches
      document.body.style.backgroundColor = "yellow";
    } else {
      document.body.style.backgroundColor = "pink";
    }
  });*/

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
