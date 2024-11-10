import React, { useEffect, useState } from 'react'
import { useUserStore } from '../Stores/useUserStore'
import {Link} from 'react-router-dom'
import Loader from './Loader'
const ProfileComp = () => {
    const {user , loading , getProfile , editProfile} = useUserStore()
    useEffect(()=>{
        getProfile()
    },[getProfile])
    
    const [dataForm, setDataForm] = useState({
        email: 'example@gmail.com' ,
        firstName: 'jhom' ,
        lastName: 'smith',
        profession: 'student' ,
        bio: 'write to know something about you'  ,
        profileImage: '' 
      })
      


    useEffect(()=>{
        if (user) {
            setDataForm({
                email: user.email || '',
                password: '',
                firstName: user.firstName || '',
                lastName: user.lastName || '',
                profession: user.profession || '',
                bio: user.bio || '',
                profileImage: user?.profileImage || ''
            });
        }
    },[user])

    // UPLOADING PROFILE IMAGE 
    const handlefile = (e)=> { 
      const file = e.target.files[0]
      if(file){
        const reader = new FileReader()

        reader.onload = () => {
           setDataForm({...dataForm , profileImage : reader.result })
        }
        reader.readAsDataURL(file)
      }

    }

    // handle submit

    const handlesubmit = (e) => { 
        e.preventDefault();
        editProfile(dataForm)
    }
    if (loading || !user) return <Loader />;

  return (
    <form onSubmit={handlesubmit} className=" w-full md:w-1/2 lg:w-1/3 xl:w-1/5 flex flex-col gap-2 items-start px-2 py-2">
    <h1 className="text-xl w-full text-start first-letter:capitalize mb-3 font-semibold ">update you profile </h1>
    <div className="flex w-full gap-2">
      <label
        htmlFor="firstName"
        className=" flex flex-col w-full text-sm gap-[0.1rem]"
      >
        <span className="font-medium">First Name</span>
        <div className="relative w-full">
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={dataForm.firstName}
            onChange={(e) => setDataForm({ ...dataForm, firstName: e.target.value })}
            className=" w-full h-9 pl-8 rounded border outline-none border-neutral-300"
            placeholder="Jhon"
          />
          <span className="absolute  left-1 inset-y-0 flex items-center  text-2xl">
            <i className="ri-id-card-line opacity-45 "></i>
          </span>
        </div>
      </label>
      {/* last name */}
      <label
        htmlFor="lastName"
        className=" flex flex-col w-full text-sm gap-[0.1rem]"
      >
        <span className="font-medium">Last Name</span>
        <div className="relative w-full">
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={dataForm.lastName}
            onChange={(e) => setDataForm({ ...dataForm, lastName: e.target.value })}
            className=" w-full h-9 pl-8 rounded border outline-none border-neutral-300"
            placeholder="Smith"
          />
          <span className="absolute  left-1 inset-y-0 flex items-center  text-2xl">
            <i className="ri-id-card-line opacity-45 "></i>
          </span>
        </div>
      </label>
    </div>
    <label
      htmlFor="email"
      className=" flex flex-col w-full text-sm gap-[0.1rem]"
    >
      <span className="font-medium">Email</span>
      <div className="relative w-full">
        <input
          type="email"
          name="email"
          id="email"
          disabled={true}
          value={dataForm.email}
          onChange={(e) => setDataForm({ ...dataForm, email: e.target.value })}
          className=" w-full h-9 pl-8 rounded border outline-none border-neutral-300"
          placeholder="Example@gmail.com"
        />
        <span className="absolute  left-1 inset-y-0 flex items-center  text-2xl">
          <i className="ri-mail-line opacity-45"></i>
        </span>
      </div>
    </label>
    {/* <label
      htmlFor="password"
      className=" flex flex-col w-full text-sm gap-[0.1rem]"
    >
      <span className="font-medium">Password</span>
      <div className="relative w-full">
        <input
          type="password"
          name="password"
          id="password"
          value={dataForm.password}
          onChange={(e) => setDataForm({ ...dataForm, password: e.target.value })}
          className=" w-full h-9 pl-8 rounded border outline-none border-neutral-300"
          placeholder="Example@gmail.com"
        />
        <span className="absolute  left-1 inset-y-0 flex items-center  text-2xl ">
          <i className="ri-lock-line opacity-45"></i>
        </span>
      </div>
    </label> */}
    <label
      htmlFor="Profession"
      className=" flex flex-col w-full text-sm gap-[0.1rem]"
    >
      <span className="font-medium">Profession</span>
      <div className="relative w-full">
        <input
          type="text"
          name="Profession"
          id="Profession"
          value={dataForm.profession}
          onChange={(e) => setDataForm({ ...dataForm, profession: e.target.value })}
          className=" w-full h-9 pl-8 rounded border outline-none border-neutral-300"
          placeholder="Example@gmail.com"
        />
        <span className="absolute  left-1 inset-y-0 flex items-center  text-2xl ">
        <i className="ri-function-add-line opacity-45"></i>
        </span>
      </div>
    </label>
    <label
      htmlFor="profileImage"
      className=" flex flex-col w-full text-sm items-center justify-center h-14  rounded border-dashed border  outline-none border-neutral-300 "
    >
      <div className="relative ">
        <input
          type="file"
          name="profileImage"
          id="profileImage"
        
          onChange={handlefile}
          className="hidden "
         
        />
        <span className="text-xl">
        <i className="ri-upload-cloud-line opacity-45" ></i>
        </span>
      </div>
      <span className="text-sm text-gray-400">image Profile</span>
    </label>
    
    
    {/* bio  */}
  
    <label
      htmlFor="bio"
      className=" flex flex-col w-full text-sm items-start justify-center gap-[0.1rem]  rounded   outline-none border-neutral-300  "
    >
    <span className="font-medium">Bio</span>
     <textarea name="" value={dataForm.bio} className='w-full border min-h-32 outline-none px-1 rounded bg-gray-50/50' onChange={(e) => setDataForm({ ...dataForm, bio: e.target.value })} id=""></textarea>
     
    </label>
    
    <button type="submit" className="text-center w-full flex items-center  justify-center  bg-neutral-700 h-9 capitalize mt-2 text-white font-semibold cursor-pointer rounded">
        {loading ? <Loader /> : 'Save'}
        </button>

    
  </form>
  )
}

export default ProfileComp