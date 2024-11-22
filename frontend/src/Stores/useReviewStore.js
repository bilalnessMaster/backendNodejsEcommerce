import axios from '../lib/axios'
import {create} from 'zustand';



export const useReviewStore = create((set , get)=>({
    Reviewss : [] , 
    getReviews : async (id) => {
        try{
            console.log(id);
            
            const {data} = await axios.get(`reviews/${id}`);
            console.log('after');
            console.log(data.reviews);
            
            set({Reviewss: data.reviews})
        }catch(error){
            console.log('erro happend while getting the reviews ' + error);
            
        }
    },
    addReview : async (dataform) => {
        try{
            const {data} = await axios.post('review' , dataform)
            set({Reviewss: data.Reviews})
        }catch(error){
            console.log('erro happend while getting the reviews ' + error);
            
        }        
    }
}))