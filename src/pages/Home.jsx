import React from 'react'
import Navbar from '../components/Navbar'
import '../pages/pagecss/home.css'
import NewProduct from './NewProduct'
import Product from './Product'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
    <Navbar />
    <div className="image-grid">
         <img className="image-grid-col-2 image-grid-row-2" src="https://i.pinimg.com/564x/52/05/e4/5205e44a326c509a7e20b1baefbc7aed.jpg" alt="architecture" />
         <img src="https://i.pinimg.com/564x/52/05/e4/5205e44a326c509a7e20b1baefbc7aed.jpg" alt="architecture" />
         <img src="https://i.pinimg.com/564x/52/05/e4/5205e44a326c509a7e20b1baefbc7aed.jpg" alt="architecture" />
         <img src="https://i.pinimg.com/564x/52/05/e4/5205e44a326c509a7e20b1baefbc7aed.jpg" alt="architecture" />
         <img src="https://i.pinimg.com/564x/52/05/e4/5205e44a326c509a7e20b1baefbc7aed.jpg" alt="architecture" />
      </div>
    <NewProduct/>
    <section className="products-main">
        <h2>All Product</h2>
        <div className="all-products-main">
            <div className="product-main">
            <img src="https://i.pinimg.com/564x/52/05/e4/5205e44a326c509a7e20b1baefbc7aed.jpg" />
            <div className="product-main-info">
                <h4 className="product-main-title">Apple Watch
                </h4>
                <p className="product-main-price">$299</p>
                <a className="product-main-btn" href="#">Buy Now</a>
            </div>
            </div>

            <div className="product-main">
            <img src="https://i.pinimg.com/564x/52/05/e4/5205e44a326c509a7e20b1baefbc7aed.jpg" />
            <div className="product-main-info">
                <h4 className="product-main-title">Apple Watch
                </h4>
                <p className="product-main-price">$299</p>
                <a className="product-main-btn" href="#">Buy Now</a>
            </div>
            </div>

            <div className="product-main">
            <img src="https://i.pinimg.com/564x/52/05/e4/5205e44a326c509a7e20b1baefbc7aed.jpg" />
            <div className="product-main-info">
                <h4 className="product-main-title">Apple Watch
                </h4>
                <p className="product-main-price">$299</p>
                <a className="product-main-btn" href="#">Buy Now</a>
            </div>
            </div>

            <div className="product-main">
            <img src="https://i.pinimg.com/564x/52/05/e4/5205e44a326c509a7e20b1baefbc7aed.jpg" />
            <div className="product-main-info">
                <h4 className="product-main-title">Apple Watch
                </h4>
                <p className="product-main-price">$299</p>
                <a className="product-main-btn" href="#">Buy Now</a>
            </div>
            </div>

            <div className="product-main">
            <img src="https://i.pinimg.com/564x/52/05/e4/5205e44a326c509a7e20b1baefbc7aed.jpg" />
            <div className="product-main-info">
                <h4 className="product-main-title">Apple Watch
                </h4>
                <p className="product-main-price">$299</p>
                <a className="product-main-btn" href="#">Buy Now</a>
            </div>
            </div>

            <div className="product-main">
            <img src="https://i.pinimg.com/564x/52/05/e4/5205e44a326c509a7e20b1baefbc7aed.jpg" />
            <div className="product-main-info">
                <h4 className="product-main-title">Apple Watch
                </h4>
                <p className="product-main-price">$299</p>
                <a className="product-main-btn" href="#">Buy Now</a>
            </div>
            </div>

            <div className="product-main">
            <img src="https://i.pinimg.com/564x/52/05/e4/5205e44a326c509a7e20b1baefbc7aed.jpg" />
            <div className="product-main-info">
                <h4 className="product-main-title">Apple Watch
                </h4>
                <p className="product-main-price">$299</p>
                <a className="product-main-btn" href="#">Buy Now</a>
            </div>
            </div>

            <div className="product-main">
            <img src="https://i.pinimg.com/564x/52/05/e4/5205e44a326c509a7e20b1baefbc7aed.jpg" />
            <div className="product-main-info">
                <h4 className="product-main-title">Apple Watch
                </h4>
                <p className="product-main-price">$299</p>
                <a className="product-main-btn" href="#">Buy Now</a>
            </div>
            </div>

            <div className="product-main">
            <img src="https://i.pinimg.com/564x/52/05/e4/5205e44a326c509a7e20b1baefbc7aed.jpg" />
            <div className="product-main-info">
                <h4 className="product-main-title">Apple Watch
                </h4>
                <p className="product-main-price">$299</p>
                <a className="product-main-btn" href="#">Buy Now</a>
            </div>
            </div>

            <div className="product-main">
            <img src="https://i.pinimg.com/564x/52/05/e4/5205e44a326c509a7e20b1baefbc7aed.jpg" />
            <div className="product-main-info">
                <h4 className="product-main-title">Apple Watch
                </h4>
                <p className="product-main-price">$299</p>
                <a className="product-main-btn" href="#">Buy Now</a>
            </div>
            </div>
        </div>
        </section>
    <Footer/>
    </>
    
  )
}

export default Home