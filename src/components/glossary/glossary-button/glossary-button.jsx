import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook} from "@fortawesome/free-solid-svg-icons/faBook";
import styles from "./glossary-button.module.scss";

export default function GlossaryButton() {
  return (
    <button id="afg-floating-glossary-button"
            className={styles.afgFloatingGlossaryButton}
            tabIndex={-1}>
      <div className={styles.buttonContent}>
        <FontAwesomeIcon icon={faBook} className={styles.floatingGlossaryIcon}/>
        Glossary
      </div>
    </button>
  )
}