import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useOrdresStore } from "../Stores/useOrdresStore";
import { useParams } from "react-router-dom";
import html2pdf from "html2pdf.js";
import moment from 'moment'
const DetailsPage = () => {
  const [statusOrder, setStatusOrder] = useState("Order");
  const { id } = useParams();
  const { order, products, getOrder } = useOrdresStore();
  const sectionRef = useRef(null);

  useEffect(() => {
    getOrder(id);
  }, [getOrder]);

  const downloadAsPDF = () => {
    const element = sectionRef.current; // Get the section element
    const options = {
      margin: 0.5,
      filename: `Order_Details_${id}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 5},
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <section className="py-24" >
      <div className="container">
        <div className="" ref={sectionRef}>
        <div className="space-y-3 mb-3">
          
          {/* ORDER DETAILS */}
          <div className="border ">
          <div className="text-xl px-2 py-1 font-medium bg-gray-100">Order details</div>
            <h1 className="flex gap-2 px-2 capitalize "><span className="font-medium">order number :</span><span>{order?._id}</span></h1>
            <h1 className="flex gap-2 px-2 capitalize "><span className="font-medium">created at :</span><span>{moment(order?.createdAt).format('YYYY-MM-DD')}</span></h1>
        
          </div>
          {/* USER DETAILS */}
          
          <div className="border ">
          <div className="text-xl px-2 py-1 font-medium bg-gray-100">shipping information</div>
            <h1 className="flex gap-2 px-2 capitalize "><span className="font-medium">shipping address :</span>madinat errahma dar bouazza<span></span></h1>
            <h1 className="flex gap-2 px-2 capitalize "><span className="font-medium">customer name :</span><span>bilal habib allah</span></h1>
            <h1 className="flex gap-2 px-2 capitalize "><span className="font-medium">phone number :</span><span>+212094785977</span></h1>
        
          </div>
          </div>
          <div className="border ">
            <table className="w-full text-left ">
              <thead className="">
                <tr className="bg-gray-100 ">
                  <td className="p-2">Product</td>
                  <td className="border-l px-2">Price</td>
                  <td className="border-l px-2">Quantity</td>
                  <td className="border-l px-2">Total price</td>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr className="border-b" key={index}>
                    <td className="p-2">{product.name}</td>
                    <td className="border-l px-2">${product.price}</td>
                    <td className="border-l px-2">{product.quantity}</td>
                    <td className="border-l px-2">
                      ${product.quantity * product.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Order Total Price */}
          <div className="text-right mt-6">
            <div className="inline-flex border px-3 py-3 gap-2 items-center">
              <span className="font-medium">Total Price:</span>
              <span className="text-gray-700">${order?.totalPrice}</span>
            </div>
          </div>
        </div>
        {/* Order Status */}
        <div>
          <div className="relative">
            <div>
              <h1 className="text-lg">Check your order status</h1>
            </div>
            <ol className="border-b-2 py-2 flex items-center justify-between">
              <li>
                <p
                  className={twMerge(
                    "font-normal text-lg",
                    order?.status == "Ordred" && "text-lime-400"
                  )}
                >
                  Ordered
                </p>
                <div
                  className={twMerge(
                    "w-3 h-3 rounded-full absolute ring-4 ring-white start-auto -bottom-[5px] bg-gray-300",
                    order?.status == "Ordred" && "bg-lime-400"
                  )}
                ></div>
              </li>
              <li>
                <p className={twMerge(
                    "font-normal text-lg",
                    order?.status == 'In transit'  && "text-lime-400"
                  )}>In transit</p>
                <div className={twMerge("w-3 h-3 rounded-full absolute ring-4 ring-white start-auto -bottom-[5px] bg-gray-300", order?.status == 'In transit' && 'bg-lime-400')}></div>
              </li>
              <li>
                <p className={twMerge(
                    "font-normal text-lg",
                    order?.status == 'Out for delivery'  && "text-lime-400"
                  )}>Out for delivery</p>
                <div className={twMerge("w-3 h-3 rounded-full absolute ring-4 ring-white -start-auto -bottom-[5px] bg-gray-300" ,order?.status == 'Out for delivery' && 'bg-lime-400')}></div>
              </li>
              <li>
                <p className={twMerge(
                    "font-normal text-lg",
                    order?.status == 'Deivered'  && "text-lime-400"
                  )}>Delivered</p>
                <div className={twMerge("w-3 h-3 rounded-full absolute ring-4 ring-white -end-1 -bottom-[5px] bg-gray-300" ,order?.status == 'Deivered' && 'bg-lime-400')}></div>
              </li>
            </ol>
          </div>
        </div>
        {/* Download Button */}
        <div className="mt-6 text-right">
          <button
            onClick={downloadAsPDF}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Download as PDF
          </button>
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;
