
const StoreItem = (props) => {
  const item = props.item
  const addItemToCart = props.addItemToCart;
  
  return (
    <li>
       <div className="store--item-icon">
         <img src={`./assets/icons/${item.id}.svg`} alt={item.name} />
        </div>
    <button className="add-to-cart-button" onClick={(event) => addItemToCart(item)}
        >Add to cart
    </button>
    </li>
  )
}
export default StoreItem
