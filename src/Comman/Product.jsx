import React from 'react';
import { products } from './db';


const Product = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Product</h2>
        <button className="bg-purple-600 text-white px-4 py-2 rounded">Add Product</button>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border border-gray-300 md:table-row">
            <th className="p-2 md:table-cell">Id</th>
            <th className="p-2 md:table-cell">Product name</th>
            <th className="p-2 md:table-cell">Sub Category</th>
            <th className="p-2 md:table-cell">Category</th>
            <th className="p-2 md:table-cell">Status</th>
            <th className="p-2 md:table-cell">Action</th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {products.map(product => (
            <tr key={product.id} className="border border-gray-300 md:table-row">
              <td className="p-2 md:table-cell">{product.id}</td>
              <td className="p-2 md:table-cell">{product.name}</td>
              <td className="p-2 md:table-cell">{product.subCategory}</td>
              <td className="p-2 md:table-cell">{product.category}</td>
              <td className="p-2 md:table-cell">
                <span className={product.status === 'Active' ? 'text-green-500' : 'text-red-500'}>
                  {product.status}
                </span>
              </td>
              <td className="p-2 md:table-cell">
                <button className="mr-2 p-2 text-gray-600">👁️</button>
                <button className="p-2 text-red-600">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
