import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
    const cartProducts = useSelector(state => state.cart.items);

    const dispatch = useDispatch();
    const removeFromCart = (product) => {
        dispatch(remove({ id: product.id }));
    };

    const cards = cartProducts.map(product => (
        <div key={product.id} className="max-w-xs rounded overflow-hidden shadow-lg m-4 bg-white transition-transform transform hover:scale-105">
            <img className="w-full h-100 object-cover" src={product.image} alt={product.title} />
            <div className="px-4 py-3">
                <div className="text-gray-600 font-bold text-lg mb-1 ">{product.title}</div>
                <p className="text-gray-900 font-bold text-md">${product.price}</p>
                <p className="text-gray-500 text-xs">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
            </div>
            <div className="px-4 pt-3 pb-2">
                <button onClick={() => removeFromCart(product)}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300 transition duration-200 ease-in-out">
                    Remove
                </button>
            </div>
        </div>
    ))

    if (cartProducts.length === 0) {
        return (
            <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 bg-white text-center p-4">
                <h2 className="text-gray-600 font-bold text-lg mb-2">No products found in the cart</h2>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-xl font-bold mb-4 mt-4">My Cart</h1>
            <div className="grid gap-4 m-4 sm:grid-cols-3 md:grid-cols-4 grid-cols-2">
                {cards}
            </div>
        </div>
    )
}

export default Cart;