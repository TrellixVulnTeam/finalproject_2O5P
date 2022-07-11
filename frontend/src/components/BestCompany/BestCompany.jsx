import React, {useState, useEffect} from 'react'
import s from './BestCompany.module.sass'

import CompanyCard from '../CompanyCard/CompanyCard'
import { getCorps } from '../../requests'

export default function BestCompany() {

  const [state, setState] = useState([])

  useEffect(() => {
    getCorps(setState)
  }, [])
  
  return (
    <div className={s.bkg}>
        <div className={s.title}>Trusted By The Best</div>
        <div className={s.companycards}>
          {state.map(corps => <CompanyCard key={corps.id} corps={corps}/>)}
        </div>
    </div>
  )
}

