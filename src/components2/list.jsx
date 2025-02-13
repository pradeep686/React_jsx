import { useState } from "react"

export default function List(){

    const[lists,setList] = useState(['Item1','Item2'])
    const [count,setCount] = useState(3)

    function addItem(){
        const itemName = 'Item'+count;
        setCount(  (previousState)  =>  previousState+1 )
        setList(  (pre)    =>  { return [...pre,itemName, ]  }  )
       
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

