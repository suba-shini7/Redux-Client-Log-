import React, { useState } from 'react'
import { addCustomer as addCustomerAction } from './slices/customerSlice'
import { useDispatch } from 'react-redux'
const CustomerAdd = () => {
    const[input,setInput]=useState('')
    const dispatch = useDispatch()
    // const [Customer,setCustomer] =useState([])
    const addCustomor=()=>{
        if (input){
            // setCustomer((previousState)=> [...previousState,input] )
            // console.log(Customer);
           dispatch( addCustomerAction(input))
            setInput('')
        }
    }
  return (
    <>
    <div>
        <h4>Add New Client</h4>
        <input type='text' value={input}  onChange={(e)=> setInput(e.target.value)} />
        <button className='addbtn' onClick={addCustomor}>Add</button>
    </div>

    </>
    
  )
}

export default CustomerAdd