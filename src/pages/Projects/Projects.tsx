import React from 'react'
import {MainContent} from '../../components/projects-content/main-content/MainContent'
import classes from './projects.module.scss'

export default function Projects() {
  return (
    <div
      className={classes.container}
    >
      <MainContent />
    </div>
  )
}
