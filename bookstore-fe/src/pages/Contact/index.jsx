import Contact from "../../components/shared/Contact";
import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";

export default function Contacts () {
    return (
        <div style={{ fontFamily: "'Segoe UI', sans-serif" }}>
            <Header/>
            <Contact/>
            <Footer/>
        </div>
    );
}