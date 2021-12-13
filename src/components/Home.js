import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className='wrapper'>
            <div className="add-to-cart">
                <img src='https://www.pinclipart.com/picdir/big/150-1500762_the-future-e-commerce-experience-clipart-shopping-cart.png' alt='bag' />
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src='https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png' alt='' />
                </div>
                <div className="discription">
                    <div className="text-wrapper item">
                        <span>Name: I Phone</span>
                        <span> Price: 100$</span>
                    </div>
                    <div className="btn-wrapper item">
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
