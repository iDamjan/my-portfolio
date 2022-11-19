import React from 'react';
import classes from './Game.module.scss'

export default (props) => {

  const style = {
    left: `${props.dot[0]}%`,
    top: `${props.dot[1]}%`
  }

  return (
    <div className={classes["snake-food"]} style={style}></div>
  )
}