import Clients from "./components/Clients";
import Home from "./components/Home";
import CreateAndSell from "./components/CreateAndSell";
import Choose from "./components/Choose";
import MarketPlace from "./components/MarketPlace";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="">
            <Home />
            <Clients />
            <CreateAndSell />
            <Choose />
            <MarketPlace />
            <Subscribe />
            <Footer />
        </div>
    );
}
export default App;
