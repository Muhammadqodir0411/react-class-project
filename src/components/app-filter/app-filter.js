import React from 'react'
import './app-filter.css'

function AppFilter({updatedFilterHandler, filter}) {
  return (
    <div className='btn-group'>


      {btnsArr.map(btn => (
        <button style={{color: 'red'}} onClick={() => updatedFilterHandler(btn.name)} key={btn.name} className={`btn ${filter === btn.name ?'btn-dark': 'btn-outline-dark'}`} type='button'>{btn.label}</button>
      ))}




      {/* <button className='btn btn-outline-dark' type='button'>Mashhur kinolar</button>
      <button className='btn btn-outline-dark' type='button'>Eng ko'p ko'rilgan kinolar</button> */}
    </div>
  )
}

const btnsArr = [
  {name: 'all', label: 'Barcha kinolar'},
  {name: 'popular', label: 'Mashhur kinolar'},
  {name: 'mostViewers', label: "Eng ko'p ko'rilgan kinolar"},
]

export default AppFilter