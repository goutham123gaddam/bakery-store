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
                </div>
            </div>
        )
    }
}