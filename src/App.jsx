
import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'
import Bookmark from './components/Bookmark/Bookmark'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = recipe => {
    const newBookmarks = [...bookmarks, recipe];
    setBookmarks(newBookmarks)
  }

  const handleRemoveFromBookmark = id => {
    const remainingBookmark = bookmarks.filter(bookmark => bookmark.recipe_id !=id)
    setBookmarks(remainingBookmark)
    
  }
  


  return (
    <>
      <Header></Header>
      <div className='flex justify-between'>
        <Recipes handleAddToBookmark={handleAddToBookmark}></Recipes>
        <Bookmark bookmarks={bookmarks} handleRemoveFromBookmark={handleRemoveFromBookmark}></Bookmark>
      </div>
    </>
  )
}

export default App
