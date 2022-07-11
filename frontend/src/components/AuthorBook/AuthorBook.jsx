import React, {useState, useEffect} from 'react'
import s from './AuthorBook.module.sass'
import BookCard from '../BookCard/BookCard'
import { getBooks } from '../../requests'



export default function AuthorBook() {

  const [state, setState] = useState([])

  useEffect(() => {
    getBooks(setState)
  }, [])

  return (
    <div className={s.bkg}>
        <div className={s.containername}>The Author’s Book</div>
        <div className={s.cardscontainer}>
          {state.map(books => <BookCard key={books.id} books={books}/>)}
        </div>
    </div>
  )
}
