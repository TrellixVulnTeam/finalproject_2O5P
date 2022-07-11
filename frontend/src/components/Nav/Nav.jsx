import React from 'react'
import s from './Nav.module.sass'
import Button from '../../UI/Button/Button'
import logo from '../../media/logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';

export default function Nav() {
  return (
    <div className={s.bkg}>
      <div className={s.sociallinkcontainer}>
        <img src={logo} alt="logo" />
        <div><FacebookIcon/></div>
        <div><TwitterIcon/></div>
        <div><LinkedInIcon/></div>
      </div>
      <div className={s.menucontainer}>
        <div>Home</div>
        <div>About</div>
        <div>Pages</div>
        <div>Contact us</div>
      </div>
      <Button>Order Today</Button>
      <div className={s.mobileburger}><MenuIcon/></div>
    </div>
  )
}
