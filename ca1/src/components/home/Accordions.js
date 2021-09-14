import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Accordions() {
  return (
    <Accordion defaultActiveKey="0" className="d-md-none">
      <Accordion.Item eventKey="0">
        <Accordion.Header>First</Accordion.Header>
        <Accordion.Body>
          <p className="accordion__paragraph">
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
            venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
            ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
            condimentum mattis rhoncus.
          </p>
          <img
            className="d-block accordion__image"
            src="Tab images/tab-1.jpg"
            alt="First Tab image"
          />
          <div className="accordion__socials">
            <span>Share</span>
            <a className="accordion__link" href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a className="accordion__link" href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Second</Accordion.Header>
        <Accordion.Body>
          <p className="accordion__paragraph">
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
            venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
            ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
            condimentum mattis rhoncus.
          </p>
          <img
            className="d-block accordion__image"
            src="Tab images/tab-2.jpg"
            alt="First Tab image"
          />
          <div className="accordion__socials">
            <span>Share</span>
            <a className="accordion__link" href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a className="accordion__link" href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Third</Accordion.Header>
        <Accordion.Body>
          <p className="accordion__paragraph">
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
            venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
            ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
            condimentum mattis rhoncus.
          </p>
          <img
            className="d-block accordion__image"
            src="Tab images/tab-3.jpg"
            alt="First Tab image"
          />
          <div className="accordion__socials">
            <span>Share</span>
            <a className="accordion__link" href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a className="accordion__link" href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>First</Accordion.Header>
        <Accordion.Body>
          <p className="accordion__paragraph">
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
            venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
            ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
            condimentum mattis rhoncus.
          </p>
          <img
            className="d-block accordion__image"
            src="Tab images/tab-1.jpg"
            alt="First Tab image"
          />
          <div className="accordion__socials">
            <span>Share</span>
            <a className="accordion__link" href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a className="accordion__link" href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
  );
}

export default Accordions;
