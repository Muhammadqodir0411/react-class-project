import { Component,} from 'react'
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieList from "../movie-list/movie-list";
import MovieAddFrom from "../movie-add-from/movie-add-from";
import { v4 as uuidv4 } from 'uuid';
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data:
        [
          { name: 'Usmon', viewers: 911, favourite: false, like: false, id: 1, },
          { name: 'Umar', viewers: 989, favourite: false, like: false, id: 2, },
          { name: 'Abubakir', viewers: 999, favourite: false, like: false, id: 3, }
        ],
      term: '',
      filter: 'all',
    }
  }

  
  onDelete = id => {
    this.setState(({ data }) => ({
      data: data.filter(c => c.id !== id)
    }))
  }

  addForm = item => {
    const newItem = { name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false, like: false }
    this.setState(({ data }) => ({
      data: [...data, newItem]
    }))
  }

  OnToggleFavourite = id => {
    this.setState(({ data }) => {
      const newArr = data.map(item => {
        if (item.id === id) {
          return { ...item, favourite: !item.favourite }
        }
        return item

      })
      return {
        data: newArr,
      }
    })
  }

  searchHandler = (arr, term) => {
    if (term.length === 0) {
      return arr
    }
    return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
  }

  filterHandler = (arr, filter) => {
    switch (filter) {
      case 'popular':
        return arr.filter(c => c.like)
      case 'mostViewers':
        return arr.filter(c => c.viewers > 990)

      default:
        return arr
    }
  }

  updatedTermHandler = term => this.setState({ term })
  updatedFilterHandler = filter => this.setState({ filter })


  OnToggleLike = id => {
    this.setState(({ data }) => {
      const newArr = data.map(item => {
        if (item.id === id) {
          return { ...item, like: !item.like }
        }
        return item
      })

      return {
        data: newArr
      }
    })
  }


  render() {
    const { data, term, filter } = this.state
    const AllMoviesCount = data.length
    const favouriteMovies = data.filter(c => c.favourite).length
    const likeMovies = data.filter(c => c.like).length
    const visbibleData = this.filterHandler(this.searchHandler(data, term), filter)
    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo AllMoviesCount={AllMoviesCount} favouriteMovies={favouriteMovies} likeMovies={likeMovies} />
          <div className="search-panel">
            <SearchPanel updatedTermHandler={this.updatedTermHandler} />
            <AppFilter filter={filter} updatedFilterHandler={this.updatedFilterHandler} />
          </div>
          <MovieList OnToggleFavourite={this.OnToggleFavourite} OnToggleLike={this.OnToggleLike} data={visbibleData} onDelete={this.onDelete} />
          <MovieAddFrom addForm={this.addForm} />
        </div>
      </div>
    );
  }


}

export default App;
