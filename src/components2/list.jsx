import { useState } from "react"

function List(){

    const[lists,setList] = useState(['Item1','Item2'])
    const [count,setCount] = useState(3)

    function addItem(){
        const itemName = 'Item'+count;
        setList(  (previousState)    =>  { return [...previousState,itemName, ]  }  )
        setCount(  (previousState)  =>  previousState+1 )
    }

    return <>
        <h1>List</h1>
        <ul>
            <h4>Item Names:</h4>
            {
                lists.map( (element,index)    =>   <li key={index}> {element} </li>)
            }
        </ul>
        <button onClick={ addItem }>Add Item</button>
    </>
}

export default List;