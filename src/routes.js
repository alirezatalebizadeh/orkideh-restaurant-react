import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Gallery from './Pages/Gallery/Gallery'
import Marasem from './Pages/Marasem/Marasem'
import Menus from './Pages/Menus/Menus'

let routes = [
  { path: '/*', element: <Home /> },
  { path: '/gallery', element: <Gallery /> },
  { path: '/menus', element: <Menus /> },
  { path: '/marasem', element: <Marasem /> }
]

export default routes
