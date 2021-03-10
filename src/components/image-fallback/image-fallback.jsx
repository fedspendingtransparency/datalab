import React from "react";
import styles from './image-fallback.module.scss';

export default function ImageFallback(props) {
  return (
    <picture className={styles.pictureContainer}>
      <source
        type={props.imgType ? props.imgType : 'image/webp'}
        srcSet={props.imgSrc}
      />
      <source type="image/png" srcSet={props.imgSrcFallBack} />
      <img
        className={'lazyload'}
        src={props.imgSrcFallBack}
        alt={props.imgAlt}
        width={props.width}
        height={props.height}
      />
    </picture>
  )
}