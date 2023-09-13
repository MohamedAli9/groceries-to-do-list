import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

function LineItem({item, changehandler, handleDelete}) {
  return (
    <li className="item" >
        <input
            type="checkbox"
            onChange={() => changehandler(item.id)}
            checked={item.checked}
        />
        <label
            style={(item.checked) ? { textDecoration: 'line-through' } : null}
            onDoubleClick={() => changehandler(item.id)}
            
        >{item.item}</label>
        <FaTrashAlt
            onClick={() => handleDelete(item.id)}
            role="button"
            tabIndex="0"
            aria-label={`Delete ${item.item}`}
        />
    </li>
  )
}

export default LineItem
