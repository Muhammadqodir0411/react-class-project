import './movie-list.css'

import MovieListItem from '../movie-list-item/movie-list-item'

function MovieList({data, onDelete, OnToggleFavourite, OnToggleLike}) {

  return (
    <ul className='movie-list'>
      {data.map(item => (
        <MovieListItem key={item.id} name={item.name} viewers={item.viewers} 
        favourite={item.favourite} onDelete={() => onDelete(item.id)} like= {item.like}
        OnToggleFavourite={() => OnToggleFavourite(item.id)} OnToggleLike={() => OnToggleLike(item.id)}/>
      ))}
    </ul>
  )
}

export default MovieList