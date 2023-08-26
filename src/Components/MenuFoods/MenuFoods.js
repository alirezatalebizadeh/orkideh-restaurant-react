import React, { useContext, useEffect } from 'react'
import './MenuFoods.css'
import orkidehData from '../../Context/Context'

export default function MenuFoods () {
  const contextData = useContext(orkidehData)

  useEffect(() => {
    console.log('items')
  }, [contextData.positionRestaurant])
  console.log(contextData.containerMenus)
  return (
    <div className='main'>
      <ul className='cards'>
        {contextData.containerMenus.map(item => (
          <li className='cards_item'>
            <div className='card' tabIndex='0'>
              <div className='card_image'>
                <img
                  loading='lazy'
                  src='/images/menuPictures/barg.jpg'
                  alt='picture '
                />
              </div>
              <div className='card_content'>
                <h2 className='card_title'>
                  Fig &amp; Berry Plate &#x2022; $16
                </h2>
                <div className='card_text'>
                  <span className='note'>Seasonal.</span>
                  <span className='note'>Seasonal.</span>
                  <p>
                    A succulent sextet of fresh figs join with a selection of
                    bodacious seasonal berries in this refreshing, shareable
                    dessert.
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
