import React from 'react'
const Test=(props)=>{
    return (<div><div>{props.value}</div>
    <input type="button" value='increase' onClick={()=>{props.action(props.value)}}/>
    </div>)
}
export default Test;