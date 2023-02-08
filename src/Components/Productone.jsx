import React from 'react'

export default function Productone(props) {
    return (
        <>
            <div class="col-md-3 my-2 px-2">
                <div class="card p-3">
                    <div class="text-center">
                        <img src={props.img} width="200" height='286' />
                    </div>
                    <div class="product-details">
                        <span class="font-weight-bold d-block">$ {props.price}</span>
                        <span>{props.title}</span>
                        <div class="buttons d-flex flex-row">
                            <div class="cart"><i class="fa fa-shopping-cart"></i></div> <button class="btn btn-primary cart-button btn-block"><span class="dot">1</span>Add to cart </button>
                        </div>
                        <div class="weight">
                            <small>1 piece 2.5kg</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
