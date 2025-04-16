import Header from "../../components/shared/Header";
import ProductList from "../../components/shared/ProductList";  
import Footer from "../../components/shared/Footer";

export default function Books () {
    return (
        <>
            <div style={{ fontFamily: "'Segoe UI', sans-serif" }}>
            <Header/>
            <ProductList/>
            <Footer/>
            </div>
        </>
    );
}

// style={{ fontFamily: "'Segoe UI', sans-serif" }}