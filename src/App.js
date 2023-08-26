import { useContext, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
//! import data
import { imgSrcGallery } from './Data/Data'
import { MarasemData } from './Data/Data'
import { menusSliderData } from './Data/Data'
import { menuData } from './Data/Data'
import articles from './Data/Data'
//! impoer context
import orkidehData from './Context/Context'
import './App.css'
import routes from './routes'

function App () {
  let router = useRoutes(routes)
  //! set some state to show element and save data

  const [articlesData, setArticles] = useState(articles)
  const [srcImgData, setSrcImgData] = useState(imgSrcGallery)
  const [marasemData, setMarasemData] = useState(MarasemData)
  const [menuSliderSrc, setMenuSliderSrc] = useState(menusSliderData)
  const [menuItems, setMenuItems] = useState(menuData)
  const [positionRestaurant, setPositionRestaurant] = useState('')
  const [containerMenus, setContainerMenus] = useState([])

  return (
    <div className='App'>
      <orkidehData.Provider
        value={{
          articlesData,
          srcImgData,
          marasemData,
          menuSliderSrc,
          menuItems,
          positionRestaurant,
          setPositionRestaurant,
          containerMenus,
          setContainerMenus
        }}
      >
        <Header />
        {router}
        <Footer />
      </orkidehData.Provider>
    </div>
  )
}

export default App
