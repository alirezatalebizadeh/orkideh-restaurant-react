import React, { useState } from 'react'
import './MenuFoods.css'

export default function MenuFoods ({ allData }) {
  const [showMessage, setShoeMessage] = useState(
    'لطفا یک شعبه را انتخاب نمایید'
  )
  console.log(allData[0])

  return (
    <div className='main'>
      {!allData[0] ? (
        <h3>{showMessage}</h3>
      ) : (
        <ul className='cards'>
          {allData[0].Salads &&
            allData[0].Salads.map(item => (
              <li key={item.id} className='cards_item'>
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
                        A succulent sextet of fresh figs join with a selection
                        of bodacious seasonal berries in this refreshing,
                        shareable dessert.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  )
}
