import NavBar from "./components/NavBar"
import Search from "./components/Search"
import AboutUs from './components/About';
import Footer from './components/Footer';
import Products from './components/Products';

const App = () => {
    return (
        <div>
    <NavBar></NavBar>
    <Search></Search>
    <Products></Products>
    <AboutUs></AboutUs>
    <Footer></Footer>
  </div>
    )
}

export default App