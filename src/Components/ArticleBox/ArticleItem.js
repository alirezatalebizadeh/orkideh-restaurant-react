import React from 'react'
import { HiArrowLeft } from 'react-icons/hi'










export default function ArticleItem (props) {
  return (
    <article>
      <div className='article-wrapper'>
        <figure>
          <img loading='lazy' src={props.img} alt='aghdasieh' />
        </figure>
        <div className='article-body'>
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
          <a href='#' className='read-more'>
            <HiArrowLeft className='icon'/> ادامه مطلب{' '}
            <span className='sr-only'>در مورد این عنوان</span>
          </a>
        </div>
      </div>
    </article>
  )
}
