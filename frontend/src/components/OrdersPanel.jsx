import React, { useEffect, useState } from "react";
import { useOrdresStore } from "../Stores/useOrdresStore";

import OrderComp from "./OrderComp";

const OrdersPanel = () => {
  const { orders, revenue, getAllOrders , pages } = useOrdresStore();
  const [page , setPage ] = useState(1)
  useEffect(() => {
    getAllOrders({ page });
  }, [getAllOrders , page]);


  return (
    <section >
      <div className="container">
        <h1 className="text-3xl">Orders panel</h1>
        <div className="mt-6 space-x-4">
          <div className="relative overflow-clip w-1/4 inline-flex flex-col justify-start items-start border gap-2 py-4 px-3 rounded-xl">
            <div className="z-20">
              <div className="text-lg font-medium  text-neutral-400">
                Tolat Revenue
              </div>
              <h1 className="text-4xl font-bold">${revenue?.totalRevenue}</h1>
              <p className="font-semibold text-neutral-300">
                <span className="text-green-500">100%</span> from last month{" "}
              </p>
            </div>
            <div className="absolute z-10 right-2 -bottom-0 hidden md:block ">
              <img src="/sales.svg" className="h-24 opacity-5 " alt="" />
            </div>
          </div>
          <div className="relative overflow-clip w-1/4 inline-flex flex-col justify-start items-start border gap-2 py-4 px-3 rounded-xl">
            <div className="z-20">
              <div className="text-lg font-medium  text-neutral-400">
                Tolat Orders
              </div>
              <h1 className="text-4xl font-bold">{revenue?.totalSum}</h1>
              <p className="font-semibold text-neutral-300">
                <span className="text-green-500">100%</span> from last month{" "}
              </p>
            </div>
            <div className="absolute z-10 right-2 -bottom-0 hidden md:block   ">
              <img src="/order.svg" className="h-24 opacity-5" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 border rounded-t-lg w-full">
        <table className="w-full rounded-t-xl text-left">
          <thead className="">
            <tr className="bg-gray-100/85 text-gray-700/75 font-normal capitalize text-lg">
              <th className="font-[450]   py-2 px-3">customer</th>
              <th className="font-[450]   py-2 px-3">Order at</th>
              <th className="font-[450]   py-2 px-3">status</th>
              <th className="font-[450]   py-2 px-3">action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
             <OrderComp key={index} {...order} page={page} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center p-4 space-x-2">
        {Array.from({length : pages} , (_, index)=>(
            <button key={index} className="size-10 rounded-md border" onClick={()=> setPage(index+1)} >{index+1}</button>
        ))}
      </div>
    </section>
  );
};

export default OrdersPanel;
