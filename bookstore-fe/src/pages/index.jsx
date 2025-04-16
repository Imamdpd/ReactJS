import Header from "../components/shared/Header";
import Hero from "../components/shared/Hero";
import ProductList from "../components/shared/ProductList";
import Footer from "../components/shared/Footer";
import Team from "../components/shared/OurTeam";
import Contact from "../components/shared/Contact";

export default function Home () {
    return (
        <>
            <div style={{ fontFamily: "'Segoe UI', sans-serif" }}>
            <Header/>
            <Hero/>
            <ProductList/>
            <Team/>
            <Contact/>
            <Footer/>
            </div>
        </>
    );
}

// style={{ fontFamily: "'Segoe UI', sans-serif" }}