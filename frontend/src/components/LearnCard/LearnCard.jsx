import React from 'react'
import s from './LearnCard.module.sass'

export default function LearnCard({learn}) {
  const cardNum = () => {
    if (learn.id < 10){
      return('0'+learn.id) 
    }else{
      return(learn.id)
    }
  }

  return (
    <div className={s.card}>
        <div className={s.cardnum}>{cardNum()}</div>
        <p>{learn.description}</p>
    </div>
  )
}
