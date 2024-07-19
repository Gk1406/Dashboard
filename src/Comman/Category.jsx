import React from 'react';
import { categories } from './db';
import { useNavigate } from 'react-router-dom'

const Category = () => {

  const navigate = useNavigate()

function goToAddCategory(){
  navigate("/addCategory")
}

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Category</h2>
        <button onClick={goToAddCategory()} className="bg-purple-600 text-white px-4 py-2 rounded">Add Category</button>
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
            <th className="p-2 md:table-cell">Category name</th>
            <th className="p-2 md:table-cell">Image</th>
            <th className="p-2 md:table-cell">Status</th>
            <th className="p-2 md:table-cell">Sequence</th>
            <th className="p-2 md:table-cell">Action</th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {categories.map(category => (
            <tr key={category.id} className="border border-gray-300 md:table-row">
              <td className="p-2 md:table-cell">{category.id}</td>
              <td className="p-2 md:table-cell">{category.name}</td>
              <td className="p-2 md:table-cell">
                <img src={category.image} alt={category.name} className="w-10 h-10 object-cover" />
              </td>
              <td className="p-2 md:table-cell">
                <span className={category.status === 'Active' ? 'text-green-500' : 'text-red-500'}>
                  {category.status}
                </span>
              </td>
              <td className="p-2 md:table-cell">{category.sequence}</td>
              <td className="p-2 md:table-cell">
                <button className="mr-2 p-2 text-blue-600">✏️</button>
                <button className="p-2 text-red-600">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Category;
