function Total(){
    return(
        <div>
          
            
            <h2 className="section-header">CART</h2>
            <div className="cart-row">
                <span className="cart-item cart-header cart-column">ITEM</span>
                <span className="cart-price cart-header cart-column">PRICE</span>
                <span className="cart-quantity cart-header cart-column">QUANTITY</span>
            </div>
            <div className="cart-items">
            </div>
            <div className="cart-total">
                <strong className="cart-total-title">Total</strong>
            <span className="cart-total-price">Rs. 0</span>
            </div>
            <button className="btn btn-primary btn-purchase" style={{width: "80%"}} type="button">PURCHASE</button>


        
        </div>
    )
}
export default Total