import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQty } from "../redux/cartSlice";

export default function Cart() {
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    return (
        <div>
            <h2  style={{  marginTop: "20px", fontFamily: "Arial, sans-serif", color: "#333", }}>
                Hello to your cart
            </h2>

            {items.map(item => (
                <div key={item.id} style={{
                    border: "1px solid gray",
                    margin: "10px",
                    padding: "10px"
                }}>
                    <h5>{item.name}</h5>

                    <input
                        type="number"
                        min="1"
                        value={item.qty}
                        onChange={(e) =>
                            dispatch(
                                updateQty({
                                    id: item.id,
                                    qty: Number(e.target.value),
                                })
                            )
                        }
                    />

                    <button onClick={() => dispatch(removeFromCart(item.id))}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}
