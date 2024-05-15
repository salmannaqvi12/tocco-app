import { useEffect, useState } from "react";
import Link from "next/link";

export default function Listing({products}:any) {

  return (
    <div className="bg-zinc-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between">
          <div className="w-1/4">
            <h1 className="text-3xl font-bold text-center mb-6">Products</h1>
          </div>
          <div className="w-1/7">
            <Link
              className="bg-green-500 text-white font-bold py-2 px-4 rounded mb-6"
              href="/product/create"
            >
              {" "}
              Add Product
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product:any) => (
            <Link  href={`/product/${product.id}`} key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={product.productImage ||"https://placehold.co/600x400"}
                alt="Product Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                
                  <span className="text-sm text-zinc-600">{product.createAt}</span>
                </div>
                <h2 className="font-bold text-lg mb-2">{product.name}</h2>
                <p className="text-zinc-700 text-base">{product.productInfo}</p>
              </div>
            </Link>
          ))}
          
        </div>
      </div>
    </div>
  );
}
