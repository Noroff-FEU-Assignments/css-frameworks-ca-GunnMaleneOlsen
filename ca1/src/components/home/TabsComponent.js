import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";

function TabsComponent() {
  return (
    <Container className="d-none d-md-block tab-container">
      <Tabs defaultActiveKey="first" id="uncontrolled-tab-example" className="tabs ">
        <Tab className="tab-content__page" eventKey="first" title="First">
        <img className="d-block tab-content__image" src="Tab images/tab-1.jpg" alt="First Tab" />
          <div className="tab-content__wrapper">
            <p className="tab-content__paragraph">
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
            </p>
            <div className="tab-content__socials">
              <span>SHARE</span>
              <a className="tab-content__link" href="/">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a className="tab-content__link" href="/">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </Tab>
        <Tab className="tab-content__page" eventKey="second" title="Second">
        <img className="d-block tab-content__image" src="Tab images/tab-2.jpg" alt="First Tab " />
          <div className="tab-content__wrapper">
            <p className="tab-content__paragraph">
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
            </p>
            <div className="tab-content__socials">
              <span>SHARE</span>
              <a className="tab-content__link" href="/">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a className="tab-content__link" href="/">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </Tab>
        <Tab className="tab-content__page" eventKey="third" title="Third">
          <img className="d-block tab-content__image" src="Tab images/tab-3.jpg" alt="First Tab" />
          <div className="tab-content__wrapper">
            <p className="tab-content__paragraph">
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
            </p>
            <div className="tab-content__socials">
              <span>SHARE</span>
              <a className="tab-content__link" href="/">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a className="tab-content__link" href="/">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default TabsComponent;
