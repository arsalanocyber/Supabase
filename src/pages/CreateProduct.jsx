// CreateProduct.js
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { supabase } from '../supabaseClient';

const CreateProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [products, setProducts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product Name:', name);
    console.log('Product Description:', description);
  };

  
  useEffect(() => {
    fetchProducts();
  }, [])

  const fetchProducts = async () => {
    try {
        const {data, error} = await supabase.from("products").select("*").limit(10)
        if(error) throw error;
        if(data != null ){
            setProducts(data);
        }
    } catch (error) {
        alert(error);
    }
  };

  const createProduct = async () => {
    try {
        const {error} = await supabase.from("products").insert({
            name: name,
            description: description
        }).single();
        if(error) throw error;
        fetchProducts();
        setName('');
        setDescription('');
    } catch (error) {
        alert(error);
    }
  }

  const updateProduct = async (id, newName, newDescription) => {
    try {
        console.log(newName)
        console.log(newDescription)
      const { error } = await supabase.from("products").update({
        name: newName,
        description: newDescription
      }).match({
        id: id
      }).single();
      if (error) throw error;
      fetchProducts();
    } catch (error) {
      alert(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
        const {error} = await supabase.from("products").delete().match({
            id: id
        }).single();
        if(error) throw error;
        fetchProducts();
        setName('');
        setDescription('');
    } catch (error) {
        alert(error);
    }
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-md w-full max-w-md">
          <h1 className="text-2xl font-semibold text-gray-100 mb-6 text-center">Create New Product</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300">Product Name</label>
              <input
                type="text"
                id="name"
                className="mt-2 p-2 w-full border border-gray-600 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="description" className="block text-gray-300">Product Description</label>
              <textarea
                id="description"
                className="mt-2 p-2 w-full border border-gray-600 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
              onClick={()=> createProduct()}
            >
              Create Product
            </button>
          </form>
        </div>
      </div>
      <div className="flex w-full bg-gray-900 flex-wrap justify-center gap-6 py-8">
        <h1 className='flex mx-auto w-full justify-center text-white text-4xl mb-4'>Product List</h1>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={() => deleteProduct(product.id)}
            onEdit={updateProduct}
          />
        ))}
      </div>
    </>
  );
};

export default CreateProduct;
