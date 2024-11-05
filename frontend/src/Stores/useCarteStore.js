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
      const {data} = await axios.put('cart' ,id)
      if(data.message) toast.success(data.message)
    } catch (error) {
      console.log(error);
      toast.error(data.error)
    }
  },

   // fetching data from backend and then display them

  getItemsCart : async () =>{ 
    try{
      const {data} = await axios.get('cart')
      set({cartItems : data.items})

    }catch(error){
      console.log(error);
      // toast.error(data.error)
    }
  },
  RemoveFromCarte: async (id) => {
    console.log(id);
    const { cartItems, calculateTotal } = get();

    try {
      const cart = cartItems.find((item) => item.id == id);

      if (cart) {
        let newItems = cartItems.filter((item) => item.id !== id);

        set({ cartItems: newItems });
        toast.error("products has been  removed", { id: "once" });
      }
      calculateTotal();
    } catch (error) {
      console.log(error);
    }
  },
  calculateTotal: async () => {
    const { cartItems } = get();
    let priceTotal = 0;
    cartItems.map((item) => {
      const cart = products.find((product) => product.id == item.id);

      if (cart) {
        priceTotal += cart.price * item.quantity;
      }
    });
    let taxRate = 0.05  
    let grandTotal =priceTotal+ (  priceTotal * taxRate) 
    set({ TotalPrice:Math.round( priceTotal) , grandTotal : Math.round(grandTotal)  });
  },
  updateQuantity: async (id, quantity) => {
    const { cartItems, RemoveFromCarte ,calculateTotal } = get();

    try {
      let item = cartItems.find((item) => item.id === id);
      if (!item) return toast.error("does not exist in shopping cart");
      if (item.quantity + quantity <= 0) {
        
          RemoveFromCarte(id);
      
      } else {
        item.quantity += quantity;
        set({ cartItems: cartItems });
        console.log(cartItems);
        calculateTotal()
      }
    } catch (error) {
      console.log(error);
    }

      
  },
}));
