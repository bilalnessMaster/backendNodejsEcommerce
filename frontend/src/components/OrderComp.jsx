import moment from "moment";
import { Link } from "react-router-dom";
import { useOrdresStore } from "../Stores/useOrdresStore";
import { useEffect, useState } from "react";

const OrderComp = ({createdAt , _id , userId , status , page}) => {
  const {ChangeStatus} = useOrdresStore()

  
  const [data , setData] = useState({
      id: _id, 
      page : page , 
      status : ''
  })
  console.log(data);
  useEffect(()=>{ 
   if (data.status !== ''){
    ChangeStatus(data)
   }

  },[data])

  
  return (
    <tr >
    <td className=" py-[0.6rem] px-3 flex items-center gap-2 font-medium w-fit">
      <span
        
        className="uppercase text-lg bg-neutral-700 px-[1.1rem] py-[0.6rem] text-white  rounded-full"
      >
        {userId.firstName.charAt(0)}
      </span>
      <div className="leading-[1.2rem]">
        <p>{userId.firstName}</p>
        <p className="text-gray-500 font-normal">{userId.email}</p>
      </div>
    </td>
    <td className="py-[0.6rem] px-3 ">
      {moment(createdAt).format("YYYY-MM-DD")}
    </td>
    <td className="py-[0.6rem] px-3 ">
      <select className='border-2 rounded-md px-2 py-1 text-center capitalize' value={status} onChange={(e)=>setData({...data , status : e.target.value})} name="status" id="">
        <option value="Ordred">Ordred</option>
        <option value="In transit">in transit</option>
        <option value="Out for delivery">out for delivery</option>
        <option value="Delivered">delivered</option>
      </select>
    </td>
    <td className="py-[0.6rem] px-3 ">
      <Link className="border-b-2 border-blue-500 text-blue-500" to={`/details/${_id}`}>Details</Link>
    </td>
  </tr>
  )
}

export default OrderComp