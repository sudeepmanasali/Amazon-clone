import React from 'react'
import banner from './banner.jpg';
import './Home.css';
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <img className="home__image" src={banner}></img>
            <div className="home__row">
            <Product
            id="123123123412"
            title="adidas Originals Men's Nite Jogger Hiking Shoe"
            image="https://images-na.ssl-images-amazon.com/images/I/51uiRTdHu8L._AC_US40_.jpg"
            price={2000.00}
            rating={4.7}

            ></Product>
                <Product
            id="123123123412"
            title="adidas Originals Men's Nite Jogger Hiking Shoe"
            image="https://images-na.ssl-images-amazon.com/images/I/51uiRTdHu8L._AC_US40_.jpg"
            price={2000.00}
            rating={4.7}

            ></Product>
            </div>
        



            <div className="home__row">
            <Product
            id="123123123412"
            title="adidas Originals Men's Nite Jogger Hiking Shoe"
            image="https://images-na.ssl-images-amazon.com/images/I/51uiRTdHu8L._AC_US40_.jpg"
            price={2000.00}
            rating={4.7}

            ></Product>
                <Product
            id="123123123412"
            title="adidas Originals Men's Nite Jogger Hiking Shoe"
            image="https://images-na.ssl-images-amazon.com/images/I/51uiRTdHu8L._AC_US40_.jpg"
            price={2000.00}
            rating={4.7}

            ></Product>
             <Product
            id="123123123412"
            title="adidas Originals Men's Nite Jogger Hiking Shoe"
            image="https://images-na.ssl-images-amazon.com/images/I/51uiRTdHu8L._AC_US40_.jpg"
            price={2000.00}
            rating={4.7}

            ></Product>
            </div>
        
        </div>
    )
}

export default Home
