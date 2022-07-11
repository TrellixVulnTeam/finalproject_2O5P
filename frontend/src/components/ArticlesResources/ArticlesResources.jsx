import React, {useState, useEffect} from 'react'
import s from './ArticlesResources.module.sass'
import ArticlesResourcesCard from '../ArticlesResourcesCard/ArticlesResourcesCard'
import { getArticles } from '../../requests'

export default function ArticlesResources() {
  
  const [state, setState] = useState([])

  useEffect(() => {
    getArticles(setState)
  }, [])

  return (
    <div className={s.bkg}>
        <div className={s.containername}>Articles & Resources</div>
        <div className={s.container}>
        {state.map(articles => <ArticlesResourcesCard key={articles.id} articles={articles}/>)}
        </div>
    </div>
  )
}
