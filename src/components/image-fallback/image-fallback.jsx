import React from "react";
import featuredAnalysesTitleStyles
  from "../../page-sections/home/feature-tile/feature-tile.module.scss";

export default function ImageFallback(props) {
  return (
    <picture>
      <source
        type={props.imgType ? props.imgType : 'image/webp'}
        srcSet={props.imgSrc}
      />
      <source type="image/png" srcSet={props.imgSrcFallBack} />
      <img
        className={`${featuredAnalysesTitleStyles.image} lazyload`}
        src={props.imgSrcFallBack}
        alt={props.imgAlt}
        width={props.width}
        height={props.height}
      />
    </picture>
  )
}