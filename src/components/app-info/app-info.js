import React from 'react'
import './app-info.scss'

function AppInfo({AllMoviesCount, favouriteMovies, likeMovies}) {
  return (
    <div className='app-info'>
      <p className='fs-3 text-uppercase'>Barcha kinolar soni: {AllMoviesCount}</p>
      <p className='fs-3 text-uppercase'>Mashhur kinolar soni: {favouriteMovies}</p>
      <p className='fs-3 text-uppercase'>Yoqtirgan kinolar soni: {likeMovies}</p>
    </div>
  )
}

export default AppInfo