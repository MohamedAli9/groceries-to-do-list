import React from 'react'
import LineItem from './LineItem'


function ItemList({items, changehandler, handleDelete}) {
  return (
    
    <ul>
        {items.map((item) => ( 
            <LineItem
            key={item.id}
            item={item}
            changehandler={changehandler}
            handleDelete={handleDelete}
            />
        
        ))}
    </ul>
      
  
  )
}

export default ItemList
