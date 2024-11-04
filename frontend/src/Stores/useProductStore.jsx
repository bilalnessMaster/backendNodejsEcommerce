import {create} from 'zustand';
import axios from '../lib/axios'
import toast from 'react-hot-toast';



export const useProductStore = create((set, get)=>(
    {
        products : [],
        singleProduct : {} , 
        loading : false , 
        
        createProduct : async (dataform) => {
            try{
                set({loading : true})
                await axios.post('products', dataform)
                set({loading : false})
                toast.success('created')
            }catch(error){
                set({ loading: false })
                return toast.error(error.message);
            }
        },

        // get trend product and display them on home page 

        trendProducts :  async () => { 
            try {
                const {data}  = await axios.get('products/trend')
                set({products : data.trending})

            }catch(error){
                return toast.error(error.message);
            }
        },
        
        // get single product

        getSingleProduct : async (id) =>{
                try{

                    const {data} = await axios.get(`products/${id}`)
                    set({singleProduct: data.product})


                }catch(error){
                    return toast.error(error.message);
                }
        }
    
    }
))