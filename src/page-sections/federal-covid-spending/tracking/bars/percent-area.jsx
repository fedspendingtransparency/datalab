import React from 'react';
import styles from './bar.module.scss';

export default function PercentBar(props) {
  return (<g className='bar'>
    <rect className={styles.outlayBar} x='0' width={`${props.outlaid}%`} height={props.barHeight}></rect>
    <rect className={styles.obligatedBar} x={`${props.outlaid}%`} width={`${props.obligated}%`} height={props.barHeight}></rect>
    <rect className={styles.unobligatedBar} x={`${props.outlaid + props.obligated}%`} width={`${props.unobligated}%`} height={props.barHeight}></rect>
  </g>);
}