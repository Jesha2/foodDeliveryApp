import {forwardRef} from 'react';
import classes from './Input.module.css'

const input = forwardRef((props,ref) => {
  return (
    <div className={classes.input}>
     <label htmlFor={props.input.id}> {props.label}</label>
      <input ref={ref} {...props.input} /> 
      {/* here we are writing the input obj properties as spread operator as it includes whatever is passes to input in props for eg: type: text or number */}
      
    </div>
  )
})

export default input
