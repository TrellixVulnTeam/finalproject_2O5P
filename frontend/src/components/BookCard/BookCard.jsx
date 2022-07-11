import React from 'react'
import s from './BookCard.module.sass'


export default function BookCard({books}) {
  
  const booklink = `/media/books/${books.imglink}`

  return (
    <div className={s.card} >
        <img src={booklink} alt="" />
        <div className={s.cardname}>
            <div className={s.bookname}>{books.bookname}</div>
            <div className={s.bookprice}>{books.price}</div>
            <p>{books.description}</p>
            <div className={s.printedbook}>Printed Book</div>
        </div>
    </div>
  )
}
 