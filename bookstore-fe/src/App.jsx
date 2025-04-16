import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages";
import Books from "./Pages/books";
import Teams from "./Pages/Team";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <div className="container">
        
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="books" element={<Books />} />
            <Route path="teams" element={<Teams />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App