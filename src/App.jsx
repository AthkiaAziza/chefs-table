
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'

function App() {
  

  return (
    <>
      <Header></Header>
      <div className='flex justify-between'>
        <Recipes></Recipes>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
