import React from 'react'
import '../App.css'
function SearchBar({setSearchVal,searchVal}) {
  return (
    <div className='searchBar'>
      <input type="text"placeholder='Search here' value={searchVal} onChange={(e)=>setSearchVal(e.target.value)}/>
    </div>
  )
}

export default SearchBar