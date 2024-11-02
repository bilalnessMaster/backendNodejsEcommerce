import { create } from "zustand";
import toast from "react-hot-toast";
import products from "../data/products.json";

export const useCarteStore = create((set, get) => ({
  cartItems: [],
  TotalPrice: 0,
  tax: 0,
  taxRate: 0.05,
  grandTotal: 0,
  addToCart: async (product, quantity) => {
    const { cartItems, calculateTotal, TotalPrice } = get();

    try {
      const item = cartItems.find((item) => item.id == product.id);
      if (!item) {
        cartItems.push({ ...product, quantity: 1 });
      }
      if (item) {
        if (!quantity) {
          item.quantity += 1;
        } else {
          item.quantity += quantity;
        }
      }
      calculateTotal();
      toast.success("Add to cart shop", { id: "add" });
    } catch (error) {
      console.log(error);
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
