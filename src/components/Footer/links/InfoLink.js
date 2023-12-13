import React from 'react';
import classes from './InfoLink.module.css';

export default function InfoLink(props) {
  return (
    <div className={classes['link']}>
      {props.children}
      </div>
  )
}
