import {create} from 'zustand';
import axios from '../lib/axios'
import toast from 'react-hot-toast';





export const useProductStore = create((set, get)=>(
    {
        products : [],
        singleProduct : {} , 
        loading : false , 
        totalePage : 1,
        
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
        },
        
        // get products with pagination  

        getProducts : async (filter)=> {
            try{
      
                
                
                const {data} = await axios.get(`products?category=${filter?.category || '' }&color=${filter?.color || ''}&page=${filter?.page}&max=${filter?.priceRange?.max || ''}&min=${filter?.priceRange?.min || ''}` )
                set({products: data.products , totalePage : data.totalePage})


            }catch(error){
                return toast.error(error.message);
            }

         },
         setTrend : async (id ,pagination) => { 
            try{ 
                const {getProducts} = get()
                const {data} = await axios.put('products', {id})
                getProducts(pagination)
                return toast.success(data.message);
            }catch(error){
                return toast.error(error.message);

            }
         }, 
         DeleteProduct : async (id , pagination) => { 
            try{
                const {getProducts} = get()
                const {data} = await axios.delete(`products/${id}`)
                getProducts(pagination)
                return toast.success(data.message);

            }catch(error){
                return toast.error(error.message);
            }
         },
         searchEgine : async (searchWords) =>{
            console.log(searchWords);
            
            try{
                const {data} = await axios.get(`products/search?searchWords=${searchWords}`)
                set({products : data.products})
            }catch(error){
                return toast.error(error.message);
            }
         }
    
    }
))