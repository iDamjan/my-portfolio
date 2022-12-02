import classes from './contact-icons.module.scss'
import instagramIcon from '../../../static/instagram-icon.svg'
import gitIcon from '../../../static/git-icon.svg'
import emailIcon from '../../../static/email-icon.svg'
import linkedInIcon from '../../../static/linkedin-icon.svg'

export const ContactIcons = () => {

  return (
    <div className = {classes.container}>
        <a target = "_blank" href="https://www.linkedin.com/in/damjan-stojanovski-4b772520a/">
            <img src={linkedInIcon} alt="linkedIn" />
        </a>
        <a target = "_blank" href="https://github.com/iDamjan/">
            <img src={gitIcon} alt="GitHub" />
        </a>
        <a target = "_blank" href="https://www.instagram.com/st.damjann/">
            <img src={instagramIcon} alt="instagram" />
        </a>
        <a target = "_blank" href="mailto:damjan.stojanovski123@gmail.com">
            <img src={emailIcon} alt="email" />
        </a>
    </div>
  )
}
