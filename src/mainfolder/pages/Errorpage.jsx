import React from 'react'
import { Link } from 'react-router-dom'

function Errorpage() {
  return (
    <>
    <div id='error-display'>
      <h1>Something went wrong in the application.</h1>
      <button>
        <Link to="/" id='link2'>GO HOME</Link>
      </button>
    </div>
    </>
  )
}

export default Errorpage