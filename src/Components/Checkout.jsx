import React from "react";
import {Link} from "react-router-dom";
import CheckoutList from "./CheckoutItems/List/CheckoutList";
import Strings from "./strings.json";
import "./Checkout.css";

export default class Checkout extends React.Component {
    render() {
        return (
            <div class="Checkout-Page">
                <div class="Header">
                    <Link to="/" class="Company">{Strings.Header.Company}</Link>
                    <CheckoutList 
                        items={this.props.items} 
                        deleteElementToCart={this.props.deleteElementToCart}
                    />
                    <div class="Check">
                        <button class="style-button1" type="button" onClick={() => {this.props.items.forEach((item) => {
                            if(item.count > 0)console.log(item.name);
                        })}}>Checkout</button>
                        <button class="style-button2" type="button" onClick={() => {this.props.deleteElementToCart();}}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}