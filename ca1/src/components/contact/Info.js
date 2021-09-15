import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function Info() {
  return (
    <div className="contact__info-wrapper">
      <div className="conatct__info-block">
        <FontAwesomeIcon icon={faEnvelope} />
        <span className="contact__info">hello@yay.com</span>
      </div>
      <div className="conatct__info-block">
        <FontAwesomeIcon icon={faPhone} />
        <span className="contact__info">123 456 7890</span>
      </div>
      <div className="conatct__info-block">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <span className="contact__info">
          123 Some Street Somewhere Some City 10000
        </span>
      </div>
    </div>
  );
}

export default Info;
