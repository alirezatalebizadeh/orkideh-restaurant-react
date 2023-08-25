import React, { useContext } from 'react'
import orkidehData from '../../Context/Context'
import './ArticleBox.css'
import ArticleItem from './ArticleItem'

export default function ArticleBox() {
  const contextData = useContext(orkidehData)
  // console.log(contextData.articlesData);

  return (
    <section className='articles'>
      {contextData.articlesData.map(item => (
        <ArticleItem key={item.id} {...item} />
      ))}
    </section>
  )
}
