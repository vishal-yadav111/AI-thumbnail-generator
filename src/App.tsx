import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import LenisScroll from "./components/LenisScroll";
import { Generate } from "./pages/Generate";
import { MyGeneration } from "./pages/my-generation";
import Login from "./pages/Login/Login";


export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Generate" element={<Generate />} />
                 <Route path="/mygeneration" element={<MyGeneration />} />
                  <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </>
    );
}