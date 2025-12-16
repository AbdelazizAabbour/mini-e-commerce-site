import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
const styles = {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    border: "1px solid ",
    padding: "10px",
}
  if (!product) return null;

  return (
    <div style={styles}>
      <h2>{product.name}</h2>
      <p>{product.price} dh</p>

      <button
        onClick={() =>
          dispatch(addToCart({ ...product, qty: 1 }))
        }
      >
        Add to Cart
      </button>
    </div>
  );
}
