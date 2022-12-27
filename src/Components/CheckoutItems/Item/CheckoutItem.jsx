import React from "react";
import "./CheckoutItem.css";
import Strings from "../../strings.json";

export default class CheckoutItem extends React.Component {
    render() {
        return (
            <div class="Checkout-Item">
                <div class="ItemName">{this.props.item.name}</div>
                <div class="ItemCost">${this.props.item.cost}</div>
                <div class="ItemCount">{this.props.item.count} items</div>
                {/* <button type="button" class="DeleteButton" onClick={() => {this.props.deleteElementToCart(this.props.id)}}>{Strings.Checkout.Delete}</button> */}
            </div>
        )
    }
}