import axios from '../lib/axios.js'
import { create } from 'zustand';
import toast from 'react-hot-toast';



export const useUserStore = create((set, get) => ({
    user: null,
    loading: false,
    chechAuth: false,
    users : [],
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
            
            const {data} = axios.get('auth/logout')
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
    getALLUsers : async () =>  {
        try { 
            set({ loading: true})
            const {data} = axios.get('auth/users')
            set({users : [...data.users] })
            set({ loading: false})
        }catch(error){
            set({ loading: false })
            return toast.error('something wrong happened');
            
        }
    }, 
    deleteUser : async (id) =>  {
        const {users} = get()
        set({ loading: true })
        try { 
            const {data} = axios.delete(`auth/users/${userId}`)
            const userss = users.filter((user)=> user._id !== id)
            set({ users : userss })
        }catch(error){
            set({ loading: false })
            return toast.error('something wrong happened');
            
        }
    }, 
    updateRole : async (id , role) =>  {
        const {users} = get()
        set({ loading: true})
        try { 
            const {data} = axios.put(`auth/users/${userId}` , {role})
            const userss = users.filter((user)=> user._id !== id)
            set({ users : userss })
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


    }


}))


