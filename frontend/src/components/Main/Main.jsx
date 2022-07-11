import React from 'react'
import s from './Main.module.sass'
import posterimage from '../../media/thedarklight.png'
import Button from '../../UI/Button/Button'

export default function Main() {
  return (
    <div className={s.main}>
        <div className={s.posterinfo}>
            <div className={s.welcometext}>Welcome To Pages!!!</div>
                <h1>Your Books From The Best Writer.</h1>
                <p>We believe that reading books are essential to a healthy culture. They’re where authors can connect with readers.</p>
            <div className={s.buttons}>
                <Button>Order Today</Button>
                <div>Read Free Demo</div>
            </div>
            <div className={s.bookinfo}>
                <div>
                    <div>Pages:</div>
                    <p>250 pages</p>
                </div>
                <div>
                    <div>Length:</div>
                    <p>10 Hours</p>
                </div>
                <div>
                    <div>Rating:</div>
                    <p>4.5/5 (305 ratings)</p>
                </div>
            </div>
        </div>
        <div className={s.poster}>
            <img src={posterimage} alt="poster" />
        </div>
    </div>
  )
}
