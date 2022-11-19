import React from "react";
import classes from './Game.module.scss'

export default (props) => {
  return (
    <div>
      {props.snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`
        }
        return (
          <div className={classes["snake-dot"]} key={i} style={style}></div>
        )
      })}
    </div>
  )
}