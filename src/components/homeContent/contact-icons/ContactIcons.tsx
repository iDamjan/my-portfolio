import React from 'react'
import classes from './contact-icons.module.scss'
import instagramIcon from '../../../static/instagram-icon.svg'
import gitIcon from '../../../static/git-icon.svg'
import emailIcon from '../../../static/email-icon.svg'
import linkedInIcon from '../../../static/linkedin-icon.svg'

export const ContactIcons = () => {
  return (
    <div className = {classes.container}>
        <a href="https://www.linkedin.com/in/damjan-stojanovski-4b772520a/">
            <img src={linkedInIcon} alt="linkedIn" />
        </a>
        <a href="https://github.com/iDamjan/">
            <img src={gitIcon} alt="GitHub" />
        </a>
        <a href="https://www.instagram.com/st.damjann/">
            <img src={instagramIcon} alt="instagram" />
        </a>
        <a href="/">
            <img src={emailIcon} alt="email" />
        </a>
    </div>
  )
}
