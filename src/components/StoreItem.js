const StoreItem = ({ count }) => {
  return (
    <div className="display-item">
      <li>
        <img src="/assets/icons/001-beetroot.svg" alt="beetroot" />
        <button
          className="add-to-cart-button"
          onClick={() => setCount(count + 1)}
        >
          {' '}
          Add to cart{' '}
        </button>
      </li>
      <li>
        <img src="/assets/icons/002-carrot.svg" alt="carrot" />
        <button
          className="add-to-cart-button"
          onClick={() => setCount(count + 1)}
        >
          {' '}
          Add to cart{' '}
        </button>
      </li>
      <li>
        <img src="/assets/icons/003-apple.svg" alt="apple" />
        <button
          className="add-to-cart-button"
          onClick={() => setCount(count + 1)}
        >
          {' '}
          Add to cart{' '}
        </button>
      </li>
      <li>
        <img src="/assets/icons/004-apricot.svg" alt="apricot" />
        <button
          className="add-to-cart-button"
          onClick={() => setCount(count + 1)}
        >
          {' '}
          Add to cart{' '}
        </button>
      </li>
      <li>
        <img src="/assets/icons/005-avocado.svg" alt="avocado" />
        <button
          className="add-to-cart-button"
          onClick={() => setCount(count + 1)}
        >
          {' '}
          Add to cart{' '}
        </button>
      </li>
      <li>
        <img src="/assets/icons/006-bananas.svg" alt="bananas" />
        <button
          className="add-to-cart-button"
          onClick={() => setCount(count + 1)}
        >
          {' '}
          Add to cart{' '}
        </button>
      </li>
      <li>
        <img src="/assets/icons/007-bell-pepper.svg" alt="bell-pepper" />
        <button
          className="add-to-cart-button"
          onClick={() => setCount(count + 1)}
        >
          {' '}
          Add to cart{' '}
        </button>
      </li>
      <li>
        <img src="/assets/icons/008-berry.svg" alt="berry" />
        <button
          className="add-to-cart-button"
          onClick={() => setCount(count + 1)}
        >
          {' '}
          Add to cart{' '}
        </button>
      </li>
      <li>
        <img src="/assets/icons/009-blueberry.svg" alt="blueberry" />
        <button
          className="add-to-cart-button"
          onClick={() => setCount(count + 1)}
        >
          {' '}
          Add to cart{' '}
        </button>
      </li>
      <li>
        <img src="/assets/icons/010-eggplant.svg" alt="eggplant" />
        <button
          className="add-to-cart-button"
          onClick={() => setCount(count + 1)}
        >
          {' '}
          Add to cart{' '}
        </button>
      </li>
    </div>
  )
}
export default StoreItem
