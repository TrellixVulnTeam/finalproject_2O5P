import React from 'react'
import s from './CompanyCard.module.sass'

export default function CompanyCard({corps}) {

  const corplink = `/media/corps/${corps.imglink}`

  return (
      <div className={s.card}>
          <img src={corplink} alt="" />
          <div>{corps.corpname}</div>
          <p>{corps.description}</p>
      </div> 
  )
}
