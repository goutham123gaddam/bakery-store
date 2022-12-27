import React from "react";
import CheckoutItem from "../Item/CheckoutItem";
import "./CheckoutList.css";

export default class CheckoutList extends React.Component {
    render() {
        return (
            <div class="Checkout-List">
                {this.props.items.map((item) => {
                    return (
                        <>
                            {item.count > 0?(<CheckoutItem 
                            item={item}
                            deleteElementToCart={this.props.deleteElementToCart} />):""}
                        </>
                    )
                })}
            </div>
        )
    }
}