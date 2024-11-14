import { create } from "zustand";
import toast from "react-hot-toast";
import products from "../data/products.json";
import axios from '../lib/axios'
export const useCarteStore = create((set, get) => ({
  cartItems: [],
  TotalPrice: 0,
  tax: 0,
  taxRate: 0.05,
  grandTotal: 0,

  // add items to backend and then diplay them in shopping items cart using getitemscart function

  addToCart: async (id) => {
    const { cartItems, calculateTotal, TotalPrice } = get();   
    try {
      const {data} = await axios.put('cart' ,{id})
      if(data.message) toast.success(data.message)
    } catch (error) {
      console.log(error);
  
    }
  },

   // fetching data from backend and then display them

  getItemsCart : async () =>{ 
    try{
      const {data} = await axios.get('cart')
      set({cartItems : data.items , TotalPrice : data.totalprice})
      return
    }catch(error){
      console.log(error);
      // toast.error(data.error)
    }
  },

  // remove  product from cart

  RemoveFromCarte: async (id) => {
    const { cartItems,getItemsCart, calculateTotal } = get();
    try {
      const {data} = await axios.delete(`cart/${id}`)
      getItemsCart()
      if(data.message) toast.success(data.message)
    } catch (error) {
      console.log(error);
    }
  },
  updateQuantity: async (id, quantity) => {
    const { cartItems, RemoveFromCarte, getItemsCart ,calculateTotal } = get();
          console.log(id , quantity);
          
    try {
          const {data}= await axios.patch('cart' , {id , quantity})
          getItemsCart()
          if(data.message) toast.success(data.message , {id : "once"})
    } catch (error) {
      console.log(error);
    }

      
  },
}));
