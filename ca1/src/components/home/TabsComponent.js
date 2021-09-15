import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";

function TabsComponent() {
  return (
    <Container className="d-none d-md-block">
      <Tabs
        defaultActiveKey="first"
        id="uncontrolled-tab-example"
        className="mb-3 "
      >
        <Tab className="tab-content__page" eventKey="first" title="First">
          <div className="tab-content__wrapper">
            <p className="tab-content__paragraph">
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.
            </p>
            <div className="tab__socials">
              <span>Share</span>
              <a className="tab__link" href="/">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a className="tab__link" href="/">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
          <img
            className="d-block tab-content__image"
            src="Tab images/tab-1.jpg"
            alt="First Tab"
          />
        </Tab>
        <Tab className="tab-content__page" eventKey="second" title="Second">
          <div className="tab-content__wrapper">
            <p className="tab-content__paragraph">
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.
            </p>
            <div className="tab__socials">
              <span>Share</span>
              <a className="tab__link" href="/">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a className="tab__link" href="/">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
          <img
            className="d-block tab-content__image"
            src="Tab images/tab-2.jpg"
            alt="First Tab "
          />
        </Tab>
        <Tab className="tab-content__page" eventKey="third" title="Third">
          <div className="tab-content__wrapper">
            <p className="tab-content__paragraph">
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.
            </p>
            <div className="tab__socials">
              <span>Share</span>
              <a className="tab__link" href="/">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a className="tab__link" href="/">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
          <img
            className="d-block tab-content__image"
            src="Tab images/tab-3.jpg"
            alt="First Tab"
          />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default TabsComponent;
