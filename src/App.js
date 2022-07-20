import './styles/reset.css'
import './styles/index.css'

import { useState } from 'react'
import initialStoreItems from './store-items'
import Store from './components/Store.js'

/*
const shopItem = [
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}
]
What should a cart item look like? 🤔

*/

console.log(initialStoreItems)

export default function App() {
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [cart, setCart] = useState([])
  const [count, setCount] = useState(0)
  
  // // Setup state here...

  const addItemToCart = (item) => {
    console.log(item)
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        
        <Store storeItems={storeItems} addItemToCart={addItemToCart} />
        
      </header>

      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
           
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£0.00</span>
          </div>
        </div>
      </main>
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}
