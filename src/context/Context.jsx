import React, { createContext, useContext, useReducer } from 'react'
import { products } from '../constants'
import { cartReducer,productReducer } from './Reducer'

const  Cart=createContext()



const Context = ({children}) => {
    const [state,dispatch]=useReducer(cartReducer,{products:products,cart:[]})
    const [productState,productDispatch]=useReducer(productReducer,{sort:null,byStock:false,byFastDelivery:false,byRating:0,searchQuery:""})
  return (
    <Cart.Provider value={{state,dispatch,productState,productDispatch}}>{children}</Cart.Provider>
  )
}

export default Context

export const CartState=()=>{
    return useContext(Cart)
}

