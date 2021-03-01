import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook} from "@fortawesome/free-solid-svg-icons/faBook";

export default function GlossaryButton() {
  return(
    <div>
      <button id="afg-floating-glossary-button" tabIndex={-1}>
        <div className="button-content">
          <FontAwesomeIcon icon={faBook} className="floating-glossary-icon" />
          Glossary
        </div>
      </button>
    </div>
  )
}