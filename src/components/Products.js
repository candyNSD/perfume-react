// Product Component
import one  from "../assest/img/one.jpg"
import two  from "../assest/img/two.jpg"
import three  from "../assest/img/three.jpg"


const Products = () => {
    return (
      <div className="products">
      <div className="box">
          <img src={one} alt='per' />
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
      </div>
      
      <div className="box">
          <img src={two} alt="villain" />
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
      </div>
      <div className="box">
          <img src={three} alt="Designs Club" />
          <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
      </div>    
  </div>
    )
  }

  export default Products