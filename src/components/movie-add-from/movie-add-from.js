import { Component } from 'react'
import './movie-add-from.css'

class MovieAddFrom extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      views: '',
    }
  }

  ChangeHandlerInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  addFormHandler = e => {
    e.preventDefault();
    this.props.addForm({name: this.state.name, viewers: this.state.views, })
    this.setState({
      name: '',
      views: ''
    })
    
  }

  render() {

    const { name, views} = this.state
    return (
      <div className='movie-add-from'>
        <h3>Yangi kino qo'shish</h3>
        <form className='add-form d-flex gap-2' onSubmit={this.addFormHandler}>
          <input onChange={this.ChangeHandlerInput} type="text" className='form-control new-movie-label' placeholder="Qanday kino?" name='name' value={name} />
          <input onChange={this.ChangeHandlerInput} type="text" className='form-control new-movie-label' placeholder="Nechi marotaba 
          ko'rilgan?" name='views' value={views} />
          <button type='submit' className='btn btn-outline-dark'>Qo'shish</button>
        </form>
      </div>
    )
  }

}

export default MovieAddFrom