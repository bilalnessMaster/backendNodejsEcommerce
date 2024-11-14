import axios from '../lib/axios.js'
import { create } from 'zustand';
import toast from 'react-hot-toast';



export const useUserStore = create((set, get) => ({
    user: null,
    loading: false,
    chechAuth: false,
    users : [],
    totalPage : 1 ,
    totalUser : 1 , 
    // api for register 
    Register: async (User) => {
        set({ loading: true })
        try {
            const { data } = await axios.post('auth/register', User)
            if (data.error) {

                set({ loading: false })
                return toast.error(data.error);

            }
            set({ loading: false })
            return toast.success(data.message);
        } catch (error) {
            set({ loading: false })
            return toast.error('something wrong happened');

        }
    },
    Login : async (User) => {
        try{
            set({ loading: true })
            const {data} = await axios.post('auth/login', User)
            if (data.error) {

                set({ loading: false })
                return toast.error(data.error);

            }
            set({ loading: false  , user : data.user})
            return toast.success(data.message);



        }catch(error){
            set({ loading: false })
            return toast.error(error.message )
        }
    },
    Logout : async ( )=>  {
        try { 
            
            const {data} = await axios.get('auth/logout')
            set({ user : null  , })
        }catch(error){
       
            return toast.error('something wrong happened');
            
        }
    }, 
    getProfile : async () =>{ 
        try {
            set({ loading: true })
            const {data} = await axios.get('auth/profile')
            set({ loading: false , user : data.user})
         }catch(error){
            set({ loading: false})
            return toast.error('something wrong happened');
        }
    },
    getALLUsers : async (pagination) =>  {
        try { 
            set({ loading: true})
            const {data} = await axios.get(`auth/users?page=${pagination}`)
            set({users : data.users  , totalPage : data.totalPage  ,totalUser: data.totalUser})
            set({ loading: false})

        }catch(error){
            set({ loading: false })
          
            
            return toast.error('something wrong happened');
            
        }
    }, 
    deleteUser : async (id ,pagination) =>  {
        const {users , getALLUsers} = get()
        set({ loading: true })
        try { 
             await axios.delete(`auth/users/${id}`)
           getALLUsers(pagination)
        }catch(error){
            set({ loading: false })
            return toast.error('something wrong happened');
            
        }
    }, 
    updateRole : async (id , role) =>  {
        const {users , getALLUsers} = get()
        
        set({ loading: true})
        try { 
            const {data} = await axios.put(`auth/users/${id}` , {role})
            set({users : data.users})
            set({ loading: false})
        }catch(error){
            set({ loading: false })
            return toast.error('something wrong happened');
            
        }
    }, 
    editProfile : async (dataform)=>{
        try{
            set({ loading: true})
            await axios.put('auth/edit-profile', dataform)
            set({ loading: false})
            return  toast.success("done")
        }catch(error){
            set({ loading: false })
            return toast.error(error.message);
            
        }


    }, 
  


}))


