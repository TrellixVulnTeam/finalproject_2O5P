import React, {useState, useEffect} from 'react'
import s from './Learn.module.sass'
import LearnCard from '../LearnCard/LearnCard'
import photo from '../../media/girlandbook.png'
import { getLearns } from '../../requests'



export default function Learn() {

    const [state, setState] = useState([])

    useEffect(() => {
        getLearns(setState)
    }, [])
    

  return (
    <div className={s.bkg}>
        <div className={s.containername}>What Will You Learn?</div>
        <div className={s.container}>
            <div className={s.learncard}>
                {state.map(learn => <LearnCard key={learn.id} learn={learn}/>)}
            </div>
            <div className={s.learnphoto}>
                <div className={s.photo}>
                    <img  src={photo} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
