import react, { useContext } from 'react'
import orkidehData from '../../Context/Context'

export default function ActionFunc () {
  const contextData = useContext(orkidehData)
  const valueSelect = contextData.positionRestaurant

  //set value of select inputs
  async function setValueOfSelect (valueSelect) {
    if (valueSelect === 'مهستان') {
      await contextData.setContainerMenus(contextData.menuItems.mahestan)
    } else if (valueSelect === 'جاده چالوس') {
      await contextData.setContainerMenus(contextData.menuItems.chaloos)
    } else if (valueSelect === 'اقدسیه') {
      await contextData.setContainerMenus(contextData.menuItems.aghdasieh)
    } else if (valueSelect === 'متل قو') {
      await contextData.setContainerMenus(contextData.menuItems.motelGho)
    } else {
      await contextData.setContainerMenus([])
    }
    console.log(contextData.containerMenus)
  }

  //   // !create product of mahestan

  //   function createItemOfAppetizers () {
  //     contextData.containerMenus.appetizers.forEach(product => {
  //       containerProduct.insertAdjacentHTML(
  //         'beforeend',
  //         `<li class="cards_item">
  //       <div class="card" tabindex="0">
  //           <div class="card_image">
  //           <img  loading="lazy" src="${product.src}" alt="${product.name}">
  //           </div>
  //           <div class="card_content">
  //               <h2 class="card_title"> ${product.price} تومان</h2>
  //               <div class="card_text">
  //                   <span class="note">Appetizers : ${product.nameEng}</span>
  //                   <span class="note">پیش غذا : ${product.name}</span>

  //               </div>
  //           </div>
  //       </div>
  //       </li>`
  //       )
  //     })
  //   }

  //   function createItemOfSalads () {
  //     contextData.menuData.mahestan.Salads.forEach(product => {
  //       containerProduct.insertAdjacentHTML(
  //         'beforeend',
  //         `<li class="cards_item">
  //       <div class="card" tabindex="0">
  //           <div class="card_image">
  //           <img  loading="lazy" src="${product.src}" alt="${product.name}">
  //           </div>
  //           <div class="card_content">
  //               <h2 class="card_title"> ${product.price} تومان</h2>
  //               <div class="card_text">
  //                   <span class="note">Salad : ${product.nameEng}</span>
  //                   <p>${product.descEng}</p>
  //                   <span class="note">سالاد : ${product.name}</span>
  //                   <i>محتویات: ${product.desc}</i>
  //               </div>
  //           </div>
  //       </div>
  //       </li>`
  //       )
  //     })
  //   }

  //   function createItemOfMain_Food () {
  //     contextData.menuData.mahestan.Main_Food.forEach(product => {
  //       containerProduct.insertAdjacentHTML(
  //         'beforeend',
  //         `<li class="cards_item">
  //       <div class="card" tabindex="0">
  //           <div class="card_image">
  //           <img  loading="lazy" src="${product.src}" alt="${product.name}">
  //           </div>
  //           <div class="card_content">
  //               <h2 class="card_title"> ${product.price} تومان</h2>
  //               <div class="card_text">
  //                   <span class="note">Main Food :${product.nameEng}</span>
  //                   <p>${product.descEng}</p>
  //                   <span class="note">غذای اصلی : ${product.name}</span>
  //                   <i>محتویات: ${product.desc}</i>
  //               </div>
  //           </div>
  //       </div>
  //       </li>`
  //       )
  //     })
  //   }

  //   function createItemOfLocal_Dishes () {
  //     contextData.menuData.motelGho.Local_Dishes.forEach(product => {
  //       containerProduct.insertAdjacentHTML(
  //         'beforeend',
  //         `<li class="cards_item">
  //       <div class="card" tabindex="0">
  //           <div class="card_image">
  //           <img  loading="lazy" src="${product.src}" alt="${product.name}">
  //           </div>
  //           <div class="card_content">
  //               <h2 class="card_title"> ${product.price} تومان</h2>
  //               <div class="card_text">
  //                   <span class="note">Local_Dishes : ${product.nameEng}</span>
  //                   <span class="note">غذای عمومی : ${product.name}</span>
  //               </div>
  //           </div>
  //       </div>
  //       </li>`
  //       )
  //     })
  //   }

  //   function createItemOfsini () {
  //     contextData.menuData.mahestan.sini.forEach(product => {
  //       containerProduct.insertAdjacentHTML(
  //         'beforeend',
  //         `<li class="cards_item">
  //       <div class="card" tabindex="0">
  //           <div class="card_image">
  //           <img  loading="lazy" src="${product.src}" alt="${product.name}">
  //           </div>
  //           <div class="card_content">
  //               <h2 class="card_title"> ${product.price} تومان</h2>
  //               <div class="card_text">
  //                   <span class="note">sini : ${product.nameEng}</span>
  //                   <p>${product.descEng}</p>
  //                   <span class="note">سینی : ${product.name}</span>
  //                   <i>محتویات: ${product.desc}</i>
  //               </div>
  //           </div>
  //       </div>
  //       </li>`
  //       )
  //     })
  //   }

  //   function createItemOfPlatters () {
  //     contextData.menuData.mahestan.Platters.forEach(product => {
  //       containerProduct.insertAdjacentHTML(
  //         'beforeend',
  //         `<li class="cards_item">
  //       <div class="card" tabindex="0">
  //           <div class="card_image">
  //           <img  loading="lazy" src="${product.src}" alt="${product.name}">
  //           </div>
  //           <div class="card_content">
  //               <h2 class="card_title"> ${product.price} تومان</h2>
  //               <div class="card_text">
  //                   <span class="note">Platters :${product.nameEng} </span>
  //                   <span class="note">چلوها : ${product.name}</span>
  //               </div>
  //           </div>
  //       </div>
  //       </li>`
  //       )
  //     })
  //   }

  //   function createItemOfSpecialFoods () {
  //     contextData.menuData.mahestan.SpecialFoods.forEach(product => {
  //       containerProduct.insertAdjacentHTML(
  //         'beforeend',
  //         `<li class="cards_item">
  //       <div class="card" tabindex="0">
  //           <div class="card_image">
  //           <img  loading="lazy" src="${product.src}" alt="${product.name}">
  //           </div>
  //           <div class="card_content">
  //               <h2 class="card_title"> ${product.price} تومان</h2>
  //               <div class="card_text">
  //                   <span class="note">SpecialFoods : ${product.nameEng}</span>
  //                   <span class="note">غذای مخصوص : ${product.name}</span>
  //               </div>
  //           </div>
  //       </div>
  //       </li>`
  //       )
  //     })
  //   }

  //   function createItemOfSides () {
  //     contextData.menuData.mahestan.Sides.forEach(product => {
  //       containerProduct.insertAdjacentHTML(
  //         'beforeend',
  //         `<li class="cards_item">
  //       <div class="card" tabindex="0">
  //           <div class="card_image">
  //           <img  loading="lazy" src="${product.src}" alt="${product.name}">
  //           </div>
  //           <div class="card_content">
  //               <h2 class="card_title"> ${product.price} تومان</h2>
  //               <div class="card_text">
  //                   <span class="note">Side :${product.nameEng}</span>
  //                   <span class="note">مزه غذا : ${product.name}</span>
  //               </div>
  //           </div>
  //       </div>
  //       </li>`
  //       )
  //     })
  //   }

  //   function createItemOfDizi () {
  //     contextData.menuData.chaloos.dizi.forEach(product => {
  //       containerProduct.insertAdjacentHTML(
  //         'beforeend',
  //         `<li class="cards_item">
  //       <div class="card" tabindex="0">
  //           <div class="card_image">
  //           <img  loading="lazy" src="${product.src}" alt="${product.name}">
  //           </div>
  //           <div class="card_content">
  //               <h2 class="card_title"> ${product.price} تومان</h2>
  //               <div class="card_text">
  //                   <span class="note">Side :${product.nameEng}</span>
  //                   <span class="note">مزه غذا : ${product.name}</span>
  //               </div>
  //           </div>
  //       </div>
  //       </li>`
  //       )
  //     })
  //   }
  //   //end craete

  //   //mahestan
  //   function generateItemOfProductMahestan () {
  //     createItemOfAppetizers()
  //     createItemOfSalads()
  //     createItemOfMain_Food()
  //     createItemOfsini()
  //     createItemOfPlatters()
  //     createItemOfSpecialFoods()
  //     createItemOfSides()
  //   }
  //   //aghdasieh
  //   function generateItemOfProductAghdasieh () {
  //     createItemOfAppetizers()
  //     createItemOfSalads()
  //     createItemOfMain_Food()
  //     createItemOfsini()
  //     createItemOfPlatters()
  //     createItemOfSpecialFoods()
  //     createItemOfSides()
  //   }

  //   //metelGhoo
  //   function generateItemOfProductmetelGhoo () {
  //     createItemOfAppetizers()
  //     createItemOfSalads()
  //     createItemOfMain_Food()
  //     createItemOfLocal_Dishes()
  //     createItemOfsini()
  //     createItemOfPlatters()
  //     createItemOfSpecialFoods()
  //     createItemOfSides()
  //   }
  //   //chaloos
  //   function generateItemOfProductChaloos () {
  //     createItemOfAppetizers()
  //     createItemOfSalads()
  //     createItemOfMain_Food()
  //     createItemOfsini()
  //     createItemOfPlatters()
  //     createItemOfSpecialFoods()
  //     createItemOfDizi()
  //     createItemOfSides()
  //   }
}
