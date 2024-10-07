import { useSelector } from "react-redux";

const Cart = () => {
    const addedProducts = useSelector(state => state.cart);
    return (
        <>
            <h2> Cart </h2>
            <h2> {JSON.stringify(addedProducts)} </h2>
            <div className="m-4 grid grid-cols-3 gap-4 sm:grid-cols-12">
                {/* <div className="min-h-[100px] rounded-lg bg-orange-500 shadow sm:col-span-1 hidden"></div> */}
                <div className="min-h-[80vh] min-w-[85vw] rounded-lg bg-teal-500 shadow "></div>
                {/* <div className="min-h-[100px] rounded-lg bg-purple-500 shadow sm:col-span-1 hidden"></div> */}
            </div>
        </>
    )
}

export default Cart;