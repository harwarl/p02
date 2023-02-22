import React from 'react'

const Header = ({ itemState, setItemState, handleClick }) => {
  return (
    <header>
        <button
        onClick={() => handleClick('Item1')}
        >
            User
        </button>
        <button
        onClick={() => handleClick('Item2')}
        >
            Posts
        </button>
        <button
        onClick={() => handleClick('Item3')}
        >
            Comments
        </button>
    </header>
  )
}

export default Header