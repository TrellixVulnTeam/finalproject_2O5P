import React from 'react'
import s from './AboutAuthor.module.sass'
import qrcode from '../../media/qrcode.png'
import photo from '../../media/author.png'



export default function AboutAuthor() {
  return (
    <div className={s.bkg}>
        <div className={s.authorphoto}>
            <div className={s.photo}>
                <img src={photo} alt="" />
            </div>
        </div>
        <div className={s.authorinfo}>
            <div className={s.authorlabel}>About the Author</div>
            <p>We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime.</p>
            <div className={s.bookinfo}>
                <div>
                    <div>02</div>
                    <p>Books Published</p>
                </div>
                <div>
                    <div>4.5</div>
                    <p>User Reviews</p>
                </div>
                <div>
                    <div>04</div>
                    <p>Best Seller Awards</p>
                </div>
            </div>
            <div className={s.authorcard}>
                <img className={s.cardqr} src={qrcode} alt="" />
                <div className={s.cardinfo}>
                    <div className={s.cardinfogname}>John Abraham , Ph.d</div>
                    <div className={s.cardinfogmail}>Mail: johnabraham@gmail.com</div>
                    <div className={s.cardinfophone}>Phone: (+2) 123 545 9000</div>
                </div>
            </div>
        </div>
    </div>
  )
}
