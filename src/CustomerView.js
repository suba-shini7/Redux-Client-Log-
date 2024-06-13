import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCustomer as deleteCustomerAction } from './slices/customerSlice'

const CustomerView = () => {
   const c = useSelector((state)=> state.customers)
   const dispatch= useDispatch()
   const deleteCustomer = (i)=>{
    dispatch(deleteCustomerAction(i))
   }
  return (
    <div>
      <hr/>
        <h3>Client List</h3>
        <ul style={{listStyle:'none'}}>
            {
             c.map((e,i)=><li>{e} <button  className='dangerbtn' onClick={()=>deleteCustomer(i)}>❌</button></li>)
            }
        </ul>
    </div>
  )
}

export default CustomerView