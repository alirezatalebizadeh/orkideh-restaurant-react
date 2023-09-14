import React, { useState } from 'react'
import './MenuFoods.css'

export default function MenuFoods ({ allData }) {
  const [showMessage] = useState(
    'لطفا یک شعبه را انتخاب نمایید'
  )
  console.log(allData[0])

  return (
    <div className='main_content'>
      {!allData[0] ? (
        <h3 className='emptyDataTitle'>{showMessage}</h3>
      ) : (
        <ul className='cards'>
          {/* SpecialFoods items */}
          {allData[0].SpecialFoods
            ? allData[0].SpecialFoods.map(item => (
                <li class='cards_item'>
                  <div class='card' tabindex='0'>
                    <div class='card_image'>
                      <img loading='lazy' src={item.src} alt={item.name} />
                    </div>
                    <div class='card_content'>
                      <h2 class='card_title'> {item.price} تومان</h2>
                      <div class='card_text'>
                        <span class='note'>SpecialFoods : {item.nameEng}</span>
                        <span class='note'>غذای مخصوص : {item.name}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            : ''}

          {/* MainFood items */}
          {allData[0].MainFood
            ? allData[0].MainFood.map(item => (
                <li class='cards_item'>
                  <div class='card' tabindex='0'>
                    <div class='card_image'>
                      <img loading='lazy' src={item.src} alt={item.name} />
                    </div>
                    <div class='card_content'>
                      <h2 class='card_title'> {item.price} تومان</h2>
                      <div class='card_text'>
                        <span class='note'>Main Food :{item.nameEng}</span>
                        <p>{item.descEng}</p>
                        <span class='note'>غذای اصلی : {item.name}</span>
                        <i>محتویات: {item.desc}</i>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            : ''}

          {/* sini items */}
          {allData[0].sini
            ? allData[0].sini.map(item => (
                <li class='cards_item'>
                  <div class='card' tabindex='0'>
                    <div class='card_image'>
                      <img loading='lazy' src={item.src} alt={item.name} />
                    </div>
                    <div class='card_content'>
                      <h2 class='card_title'> {item.price} تومان</h2>
                      <div class='card_text'>
                        <span class='note'>sini : {item.nameEng}</span>
                        <p>{item.descEng}</p>
                        <span class='note'>سینی : {item.name}</span>
                        <i>محتویات: ${item.desc}</i>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            : ''}

          {/* appetizers items */}
          {allData[0].appetizers
            ? allData[0].appetizers.map(item => (
                <li class='cards_item'>
                  <div class='card' tabindex='0'>
                    <div class='card_image'>
                      <img loading='lazy' src={item.src} alt={item.name} />
                    </div>
                    <div class='card_content'>
                      <h2 class='card_title'> {item.price} تومان</h2>
                      <div class='card_text'>
                        <span class='note'>Appetizers : {item.nameEng}</span>
                        <span class='note'>پیش غذا : {item.name}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            : ''}

          {/* Platters items */}
          {allData[0].Platters
            ? allData[0].Platters.map(item => (
                <li class='cards_item'>
                  <div class='card' tabindex='0'>
                    <div class='card_image'>
                      <img loading='lazy' src={item.src} alt={item.name} />
                    </div>
                    <div class='card_content'>
                      <h2 class='card_title'> {item.price} تومان</h2>
                      <div class='card_text'>
                        <span class='note'>Platters : {item.nameEng} </span>
                        <span class='note'>چلوها : {item.name}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            : ''}

          {/* salads items */}
          {allData[0].Salads
            ? allData[0].Salads.map(item => (
                <li class='cards_item'>
                  <div class='card' tabindex='0'>
                    <div class='card_image'>
                      <img loading='lazy' src={item.src} alt={item.name} />
                    </div>
                    <div class='card_content'>
                      <h2 class='card_title'> {item.price} تومان</h2>
                      <div class='card_text'>
                        <span class='note'>Salad : {item.nameEng}</span>
                        <p>{item.descEng}</p>
                        <span class='note'>سالاد : {item.name}</span>
                        <i>محتویات: {item.desc}</i>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            : ''}

          {/* SpecialFoods items */}
          {allData[0].SpecialFoods
            ? allData[0].SpecialFoods.map(item => (
                <li class='cards_item'>
                  <div class='card' tabindex='0'>
                    <div class='card_image'>
                      <img loading='lazy' src={item.src} alt={item.name} />
                    </div>
                    <div class='card_content'>
                      <h2 class='card_title'> {item.price} تومان</h2>
                      <div class='card_text'>
                        <span class='note'>SpecialFoods : {item.nameEng}</span>
                        <span class='note'>غذای مخصوص : {item.name}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            : ''}

          {/* Sides items */}
          {allData[0].Sides
            ? allData[0].Sides.map(item => (
                <li class='cards_item'>
                  <div class='card' tabindex='0'>
                    <div class='card_image'>
                      <img loading='lazy' src={item.src} alt={item.name} />
                    </div>
                    <div class='card_content'>
                      <h2 class='card_title'> {item.price} تومان</h2>
                      <div class='card_text'>
                        <span class='note'>Side : {item.nameEng}</span>
                        <span class='note'>مزه غذا : {item.name}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            : ''}

          {/* LocalDishes items */}
          {allData[0].LocalDishes
            ? allData[0].LocalDishes.map(item => (
                <li class='cards_item'>
                  <div class='card' tabindex='0'>
                    <div class='card_image'>
                      <img loading='lazy' src={item.src} alt={item.name} />
                    </div>
                    <div class='card_content'>
                      <h2 class='card_title'> {item.price} تومان</h2>
                      <div class='card_text'>
                        <span class='note'>Local_Dishes : {item.nameEng}</span>
                        <span class='note'>غذای عمومی : {item.name}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            : ''}

          {/* dizi items */}
          {allData[0].dizi
            ? allData[0].dizi.map(item => (
                <li class='cards_item'>
                  <div class='card' tabindex='0'>
                    <div class='card_image'>
                      <img loading='lazy' src={item.src} alt={item.name} />
                    </div>
                    <div class='card_content'>
                      <h2 class='card_title'> {item.price} تومان</h2>
                      <div class='card_text'>
                        <span class='note'>Side :{item.nameEng}</span>
                        <span class='note'>مزه غذا : {item.name}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            : ''}
        </ul>
      )}
    </div>
  )
}
