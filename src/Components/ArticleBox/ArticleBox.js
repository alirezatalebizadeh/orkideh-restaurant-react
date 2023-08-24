import React, { useContext } from 'react'
import orkidehData from '../../Context/Context'
import './ArticleBox.css'
import ArticleItem from './ArticleItem'

export default function ArticleBox () {
  const contextData = useContext(orkidehData)

  return (
    <section className='articles'>
      {contextData.articlesData.map(item => (
        <ArticleItem {...item} />
      ))}
    </section>
  )
}
