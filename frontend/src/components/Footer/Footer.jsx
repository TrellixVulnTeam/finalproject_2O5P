import React from 'react'
import s from './Footer.module.sass'
import logo from '../../media/logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <div className={s.bkg}>
        <div className={s.logo}>
            <img src={logo} alt="" />
            <div className={s.sociallinkcontainer}>
                <div><FacebookIcon/></div>
                <div><TwitterIcon/></div>
                <div><LinkedInIcon/></div>
                <div><InstagramIcon/></div>
            </div>
        </div>
        <div className={s.menulist}>
            <div className={s.explore}>
                <div>Explore</div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Articles</li>
                    <li>Our Store</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className={s.upages}>
            <div>Utility Pages</div>
                <ul>
                    <li>Style Guide</li>
                    <li>404 Not Found</li>
                    <li>Password Protected</li>
                    <li>Licenses</li>
                    <li>Changelog</li>
                </ul>
            </div>
            <div className={s.contacts}>
                <div className={s.contactsname}>Keep in Touch</div>
                <div className={s.info}>
                    <div className={s.address}>
                        <ul className={s.addresstitle}>
                            <li>Address :</li>
                            <li>Mail :</li>
                            <li>Phone :</li>
                        </ul>
                        <ul className={s.addressinfo}>
                            <li>24A Kingston St, Los Vegas</li>
                            <li>support@pages.com</li>
                            <li>(+22) 123 - 4567 - 900</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
