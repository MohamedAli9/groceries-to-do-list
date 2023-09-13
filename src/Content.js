import React from 'react'


import ItemList from './ItemList';

function Content({items, changehandler, handleDelete}) {
  

    

  return (
    <main>
      {items.length? (
        <ItemList 
        items={items}
        changehandler={changehandler}
        handleDelete={handleDelete}
        />
          
      ): (
        <p style={{ marginTop: '2rem' }}>Your list is empty.</p>

      )}
                
       
      
    </main>
  )
}

export default Content



