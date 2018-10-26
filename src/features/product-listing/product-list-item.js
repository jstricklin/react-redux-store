import React from 'react';

export default function ProductListItem(props) {

    const thisItemInCart = props.cart.filter(item => item.id === props.product.id)[0]

    return <div className="product-list-item">
        <h3> {props.name}</h3>
        <img
            height={100}
            title={props.product.name}
            src={`/products/${props.product.image}`}
            alt="Image"   />
        <div>{props.product.description}</div>
        <div>{props.product.price}</div>

        <div> <button onClick={()=> props.addToCart(props.product)}> Add to Cart ({(thisItemInCart && thisItemInCart.quantity) || 0})</button></div>


    </div>

}
