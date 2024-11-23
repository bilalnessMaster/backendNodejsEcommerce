import axios from '../lib/axios'
import {create} from 'zustand';



export const useReviewStore = create((set , get)=>({
    Reviewss : [] , 
    getReviews : async (id) => {
        try{
          
            
            const {data} = await axios.get(`reviews/${id}`);
      
            
            set({Reviewss: data.reviews})
        }catch(error){
            console.log('erro happend while getting the reviews ' + error);
            
        }
    },
    addReview : async (dataform) => {
        try{
            console.log(dataform);
            
            const {data} = await axios.post('reviews' , dataform)
            set({Reviewss: data.reviews})
        }catch(error){
            console.log('erro happend while getting the reviews ' + error);
            
        }        
    },
    deteleReview : async (id) => { 
        try{
            const {data} = await axios.delete(`reviews/${id}`)
            set({Reviewss: data.reviews})
        }catch(error){
            console.log(error);
            
        }
    }
}))