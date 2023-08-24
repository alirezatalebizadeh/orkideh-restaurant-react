import { useContext, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import articles from './Data/Data'
import orkidehData from './Context/Context'
import './App.css'
import routes from './routes'

function App () {
  //! set some state to show element and save data

  const [articlesData, setArticles] = useState(articles)
  let router = useRoutes(routes)
  return (
    <div className='App'>
      <orkidehData.Provider
        value={{
          articlesData
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
