import {create} from 'zustand';
import axios from '../lib/axios';


export const useOrdresStore = create((set, get)=>({
    orders : [],
    order : null ,
    revenue: {} ,
    pages : null,
    products : [],
    getAllOrders : async (setting) => { 
        try{

            const {data} = await axios.get(`orders?page=${setting.page}`)

            set({orders:data.orders , revenue : data.revenue , pages : data.pages})

        }catch(error){

        }
    },
    ChangeStatus :  async (setting) => {
        try {
            console.log(setting);
            
            const {getAllOrders} = get()
            const {data} = await axios.put('orders' ,setting)
            getAllOrders(setting)
        }catch(error){
          console.log('error happend while change status of order '+ error);
          
        }
    },
    getOrder :async (id) => { 
        try {
            const {data} = await axios.get(`orders/singleOrder/${id}`)
            set({order : data.order , products : data.items})
        } catch (error) {
            console.log('error happend while getting single order  '+ error);
        }
    }
}))