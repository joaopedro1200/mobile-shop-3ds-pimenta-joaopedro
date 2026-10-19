import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProductCard from "./produtos/ProductCard";

function App() {
  return (
    <>
      <Header />
      <Home />
      <ProductCard />
      <Footer />
    </>
  );
}

export default App;