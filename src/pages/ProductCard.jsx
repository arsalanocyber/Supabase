// ProductCard.js
import React, { useState } from 'react';

const ProductCard = ({ product, onDelete, onEdit, setNewName, setNewDescription }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(product.name);
  const [editedDescription, setEditedDescription] = useState(product.description);

  const handleUpdate = () => {
    
          onEdit(product.id, editedName, editedDescription);
          setIsEditing(false);
  };

  return (
    <div className="bg-gray-800 p-6 rounded shadow-md text-gray-100 max-w-sm mx-auto mb-4">
      {isEditing ? (
        <>
          <div className="mb-4">
            <label htmlFor="editName" className="block text-gray-300">Product Name</label>
            <input
              type="text"
              id="editName"
              className="mt-2 p-2 w-full border border-gray-600 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="editDescription" className="block text-gray-300">Product Description</label>
            <textarea
              id="editDescription"
              className="mt-2 p-2 w-full border border-gray-600 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleUpdate}
              className="bg-green-600 text-white py-1 px-4 rounded hover:bg-green-700 transition duration-200"
            >
              Update
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-600 text-white py-1 px-4 rounded hover:bg-gray-700 transition duration-200"
            >
              Go Back
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-400 mb-4">{product.description}</p>
          <div className="flex justify-between">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700 transition duration-200"
            >
              Edit
            </button>
            <button
              onClick={onDelete}
              className="bg-red-600 text-white py-1 px-4 rounded hover:bg-red-700 transition duration-200"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;
