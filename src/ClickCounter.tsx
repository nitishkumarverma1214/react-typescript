import { useState } from "react"
const ClickCounter = ()=>{

    const [count, setCount] = useState(0)

    return <>
    <p>Count:{count}</p>
    <button onClick={()=> setCount(prev => prev+1)}>click</button>
    </>
}

export default ClickCounter