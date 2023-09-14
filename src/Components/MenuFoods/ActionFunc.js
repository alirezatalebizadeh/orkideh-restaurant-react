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

  return setValueOfSelect()

  
}
