import StoreItem from './StoreItem'

const Store = (props) => {
  const storeItems = props.storeItems;
  const addItemToCart = props.addItemToCart;
  return (
    <ul className="item-list store--item-list">
    
    {storeItems.map(item => {
    return(
      <StoreItem key={item.id} item={item} addItemToCart={addItemToCart}/>
    //   <li>
    //   <div class="store--item-icon">
    //     <img src={`./assets/icons/${item.id}.svg`} alt={item.name} />
    // </div>
    // <button className="add-to-cart-button" onClick={(event) => addItemToCart(item)}
    // >Add to cart
    // </button>
    
    // </li>
  )})}
  </ul>
  )
}
export default Store