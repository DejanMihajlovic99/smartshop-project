import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ShopContextProvider } from "./context/shop-context";
import AnimatedRoutes from "./components/animatedroutes";
import { Navbar } from "./components/navbar";
import Footer from "./components/footer";
import Announcement from "./components/announcement";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Announcement />
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
