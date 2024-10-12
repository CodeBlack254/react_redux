import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import StatusCode from "../utils/status_code";

const Product = () => {
    const dispatch = useDispatch();
    const {data: products, status} = useSelector(state => state.products);

    useEffect(() => {
        // dispatch an action for fetch products
        dispatch(getProducts());
    }, []);

    const addToCart = (product) => {
        dispatch(add(product))
    }

    if (status === StatusCode.LOADING) {
        return (
            <div className="p-4 m-4 text-sm text-blue-800 rounded-lg bg-blue-50" role="alert">
                <span className="font-medium">Loading, please wait...</span>
            </div>
        );
    }
    if (status === StatusCode.ERROR) {
        return (
            <div className="p-4 m-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                <span className="font-medium">Something went wrong! Try again.</span>
            </div>
        );
    }

    const cards = products.map(product => (
        <div key={product.id} className="max-w-xs rounded overflow-hidden shadow-lg m-4 bg-white transition-transform transform hover:scale-105">
            <img className="w-full h-100 object-cover" src={product.image} alt={product.title} />
            <div className="px-4 py-3">
                <div className="text-gray-600 font-bold text-lg mb-1 ">{product.title}</div>
                <p className="text-gray-900 font-bold text-md">${product.price}</p>
                <p className="text-gray-500 text-xs">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
            </div>
            <div className="px-4 pt-3 pb-2">
                <button onClick={() => addToCart(product)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300 transition duration-200 ease-in-out">
                    Add to Cart
                </button>
            </div>
        </div>
    ))


    return (
        <div>
            <h1 className="text-xl font-bold mb-4 mt-4">Trending Products</h1>
            <div className="grid gap-4 m-4 sm:grid-cols-3 md:grid-cols-4 grid-cols-2">
                {cards}
            </div>
        </div>
    )
}

export default Product;
