// import React from 'react'
// import { CiStar } from "react-icons/ci";
// import Link from 'next/link';
// import { ProductTypePrpos } from './ProductCard.types';

// export default function ProductCard({ product }: ProductTypePrpos) {
//   return (
//     <Link href={`/ProductDetalis/${product.id}`}>
//       <div key={product.id} className='p-b rounded-xl'>
//         <img src={product.imageCover} className='w-full bg-gray-200 ' alt={product.title} />
//         <h2 className='ml-2 font-bold mt-2'>{product.title.split(' ').slice(0, 2).join(' ')}</h2>
//         <h3 className='ml-2 font-semibold mb-2'>Price: {product.price}
//           <span className="flex items-center text-yellow-400 ml-2">
//             <CiStar />
//             <CiStar />
//             <CiStar />
//             <CiStar />
//             <CiStar />
//           </span></h3>

//       </div>
//     </Link>

//   )
// }

import Link from "next/link";
import { CiStar } from "react-icons/ci";

export default function ProductCard({ product }: { product: any }) {
  return (
    <Link href={`/ProductDetalis/${product.id}`}>
      <div className="bg-red-300 mt-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-3 cursor-pointer border border-gray-100">

        <img
          src={product.imageCover}
          alt={product.title}
          className="w-full h-64 object-cover rounded-lg bg-gray-100"
        />

        <h2 className="text-blue-700 font-semibold text-base mt-3 hover:underline">
          {product.title.split(" ").slice(0, 2).join(" ")}
        </h2>

        <p className="text-gray-500 text-sm">Women's Fashion</p>

        <p className="text-gray-600 text-sm mb-1">{product.brand?.name || "DeFacto"}</p>

        <div className="flex justify-between items-center mt-1">
          <span className="text-green-500 font-semibold">{product.price} EGP</span>

          <div className="flex items-center text-yellow-400 text-sm">
            <span className="mr-1">{product.ratingsAverage || 4.8}</span>
            <CiStar className="text-lg" />
          </div>
        </div>
      </div>
    </Link>
  );
}
