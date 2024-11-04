import React, { useEffect, useState } from 'react'
import { useUserStore } from '../Stores/useUserStore'
import Loader from './Loader'
import { useProductStore } from '../Stores/useProductStore'
const CreateProductsPanel = () => {
  const {loading, createProduct} = useProductStore()
  const [isUpload  , setIsUpload] = useState(false)
  const [dataForm, setDataForm] = useState({
    name: '',
    category: '',
    oldPrice: '',
    price: '',
    imageURL: '',
    color: '',
    description: ''
  })

  const hanldefile = (e) => {
        setIsUpload(true)
        const file =e.target.files[0]
        if(file){
            const reader = new FileReader()
            reader.onload = () => {
              setDataForm({...dataForm , imageURL : reader.result})
            }
            reader.readAsDataURL(file)
        }
       
  }

  const hanldeSubmit  = async (e) => {
      e.preventDefault();
      await createProduct(dataForm)
  }
  useEffect(()=>{ 

  },[isUpload])
  return (
    <form onSubmit={hanldeSubmit} className=" w-full md:w-1/2 lg:w-1/3 xl:w-1/5 flex flex-col gap-2 items-start px-2 py-2">
      <h1 className="text-xl w-full text-start first-letter:capitalize mb-3 font-semibold ">update you profile </h1>
      {/* product name  */}
      <label
        htmlFor="name"
        className=" flex flex-col w-full text-sm gap-[0.1rem]"
      >
        <span className="font-medium">Product name</span>
        <div className="relative w-full">
          <input
            type="text"
            name="name"
            id="name"
            value={dataForm.name}
            onChange={(e) => setDataForm({ ...dataForm, name: e.target.value })}
            className=" w-full h-9 pl-8 rounded border outline-none border-neutral-300"
            placeholder="'ex : Necklace'"
          />
          <span className="absolute  left-1 inset-y-0 flex items-center  text-2xl">
            <i className="ri-id-card-line opacity-45 "></i>
          </span>
        </div>
      </label>
      {/* category */}

      <label htmlFor="category" className=" flex flex-col w-full text-sm gap-[0.1rem]">

        <span className="font-medium">Category</span>
        <select name="category" onChange={(e) => setDataForm({ ...dataForm, category: e.target.value })} className='h-9 rounded border outline-none border-gray-300' id="">
          <option value="Accessories">Accessories</option>
          <option value="Dress collection">Dress collection</option>
          <option value="Jewellery">Jewellery</option>
          <option value="Cosmetics">Cosmetics</option>
        </select>

      </label>
      {/* oldprice */}
      <label htmlFor="oldPrice" className=" flex flex-col w-full text-sm gap-[0.1rem]">

        <span className="font-medium">Old price</span>
        <div className="relative w-full">
          <input
            type="number"
            name="oldPrice"
            id="oldPrice"
            value={dataForm.oldPrice}
            onChange={(e) => setDataForm({ ...dataForm, oldPrice: e.target.value })}
            className=" w-full h-9 pl-8 rounded border outline-none border-neutral-300"
            placeholder="$1"
          />
          <span className="absolute  left-1 inset-y-0 flex items-center  text-2xl">
            <i className="ri-sort-number-asc opacity-45"></i>
          </span>
        </div>

      </label>
      {/* price */}
      <label htmlFor="price" className=" flex flex-col w-full text-sm gap-[0.1rem]">

        <span className="font-medium">Price</span>
        <div className="relative w-full">
          <input
            type="number"
            name="price"
            id="price"
            value={dataForm.price}
            onChange={(e) => setDataForm({ ...dataForm, price: e.target.value })}
            className=" w-full h-9 pl-8 rounded border outline-none border-neutral-300"
            placeholder="$199"
          />
          <span className="absolute  left-1 inset-y-0 flex items-center  text-2xl">
            <i className="ri-sort-number-asc opacity-45"></i>
          </span>
        </div>

      </label>
      {/* color  */}
      <label
        htmlFor="color"
        className=" flex flex-col w-full text-sm gap-[0.1rem]"
      >
        <span className="font-medium">Product name</span>
        <div className="relative w-full">
          <input
            type="text"
            name="color"
            id="color"
            value={dataForm.color}
            onChange={(e) => setDataForm({ ...dataForm, color: e.target.value })}
            className=" w-full h-9 pl-8 rounded border outline-none border-neutral-300"
            placeholder="black"
          />
          <span className="absolute  left-1 inset-y-0 flex items-center  text-2xl">
            <i className="ri-color-filter-line opacity-45"></i>
          </span>
        </div>
      </label>
      {/* file  */}
      <label
        htmlFor="Image"
        className=" flex flex-col w-full text-sm items-center justify-center h-20  rounded border-dashed border  outline-none border-neutral-300 "
      >
        <div className="relative ">
          <input
            type="file"
            name="Image"
            id="Image"

            onChange={hanldefile}
            className="hidden "

          />
          <span className="text-xl">
            <i className="ri-upload-cloud-line opacity-45" ></i>
          </span>
        </div>
      {isUpload ? <span className="text-sm text-green-400 font-medium">Upload</span> : <span className="text-sm text-gray-400 font-medium">Image product</span>}
      </label>
      <label
      htmlFor="description"
      className=" flex flex-col w-full text-sm items-start justify-center gap-[0.1rem]  rounded   outline-none border-neutral-300  "
    >
    <span className="font-medium">Description</span>
     <textarea name="" value={dataForm.description} className='w-full border min-h-32 outline-none px-1 rounded bg-gray-50/50' onChange={(e) => setDataForm({ ...dataForm, description: e.target.value })} id=""></textarea>
     
    </label>
      <button type="submit" className="text-center w-full flex items-center  justify-center  bg-neutral-700 h-9 capitalize mt-2 text-white font-semibold cursor-pointer rounded">
        {loading ? <Loader /> : 'Save'}
      </button>


    </form>
  )
}

export default CreateProductsPanel