import {useRef, useState} from 'react';
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';


// form  we use for the user to select the amount of  food item 
const MealFormItem = (props) => {

  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
          event.preventDefault();

          const enteredAmount = amountInputRef.current.value;
          const enteredAmountNumber = +enteredAmount;//coverting into a number from string

          if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
          ) {
            setAmountIsValid(false);
            return;
          }

          props.onAddToCart(enteredAmountNumber);// we pass this as the cart tiem to be passed need more data and so we wonts call context here insteasd in mealitem.js where we have all the ither data. here we are jut getting the amt
  }; 
  return (
    <form className={classes.form} onSubmit={submitHandler}>
     <Input label="Amount"
     ref={amountInputRef}
    //  props passing as an obj
     input ={{
      id: 'amount_' + props.id, // this changed!
      type:'number',
      min:'1',
      max:'5',
      step:'1',
      defaultValue :'1'
     }}
     
     />
      
      <button> Add
        </button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  )
}

export default MealFormItem
