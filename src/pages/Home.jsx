import ProductCard from "../components/productCard";

const produits = [
    { id: 1, name: "Creolab-elec", price: 1000 },
    { id: 2, name: "Sas-bigie", price: 2070 },
    { id: 3, name: "Sony lome", price: 3000 },
    { id: 4, name: "Sony toolkit", price: 5000 },
];

const styles = {
    display: "flex",
    gap: "20px",
}
export default function Home() {
    return (
        <>
            <h1 style={{  marginTop: "20px", fontFamily: "Arial, sans-serif", color: "#333", }}>
                Home Page
            </h1>
            <div>
                <div style={styles}>
                    {produits.map(p => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </>
    );
}
