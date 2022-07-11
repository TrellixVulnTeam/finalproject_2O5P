import React from 'react'
import s from './GetBook.module.sass'
import photo from '../../media/getbookphoto.png'

export default function GetBook() {
  return (
    <div className={s.bkg}>
      <div className={s.container}>
        <div className={s.containername}>Get Book Copy Today!</div>
        <p>We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers.</p>
      </div>
      <img src={photo} alt="" />
    </div>
  )
}
