import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import classes from './projects.module.scss'

export default function Projects() {
  return (
    <div
      // style={{ backgroundImage: `url(${AboutMeBackground})` }}
      className={classes.container}
    >
      <Navbar />
    </div>
  )
}
