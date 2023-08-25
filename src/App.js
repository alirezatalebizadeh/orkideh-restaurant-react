import { useContext, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
//! import data
import {imgSrcGallery} from './Data/Data'
import articles from './Data/Data'
//! impoer context
import orkidehData from './Context/Context'
import './App.css'
import routes from './routes'



function App() {
  //! set some state to show element and save data

  const [articlesData, setArticles] = useState(articles)
  const [srcImgData, setSrcImgData] = useState(imgSrcGallery)
  let router = useRoutes(routes)


  // console.log(srcImgData);


  return (
    <div className='App'>
      <orkidehData.Provider
        value={{
          articlesData,
          srcImgData
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
