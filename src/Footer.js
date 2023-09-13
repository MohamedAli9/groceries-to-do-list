import React from 'react'

function Footer({length}) {

  let result = length === 1? "list item": "list items";
    
  return (
    <footer>
        <p>{length} {result}</p>
    </footer>
  )
}

export default Footer
