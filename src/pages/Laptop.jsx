import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const Laptop = () => {
  return (
    <>
        <Navbar/>
        <section className="products-main">
        <h2>All Laptop</h2>
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
        </div>    
        </section>
        <Footer/>
    </>
  )
}

export default Laptop