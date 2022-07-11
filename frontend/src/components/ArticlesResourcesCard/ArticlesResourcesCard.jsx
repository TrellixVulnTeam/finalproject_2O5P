import React from 'react'
import s from './ArticlesResourcesCard.module.sass'

export default function ArticlesResourcesCard({articles}) {

    const articlescardlink = `/media/articlesresources/${articles.imglink}`

  return (
    <div className={s.card}>
        <img src={articlescardlink} alt="" />
        <div>
            <div className={s.cardname}>{articles.articlesname}</div>
            <p className={s.carddescription}>{articles.description}</p>
            <div className={s.carddate}>{articles.carddate}</div>
        </div>
    </div>
  )
}
