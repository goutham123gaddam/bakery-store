import React from "react";
import Strings from "../../strings.json";
import "./BodyItem.css";

export default class BodyItem extends React.Component{
    render() {
        return (
            <div class="BodyItem">
                <div class="Image-Wrapper">
                    <img class="Product-Image" src={this.props.image} />
                </div>
                <div class="Product-Details">
                    <div class="Name">{this.props.name}</div>
                    <div class="Cost">${this.props.cost}</div>
                    <button type="button" class="Button" onClick={() => {this.props.addElementToCart(this.props.id)}}>
                        {Strings.Body.AddToCart}
                    </button>
                </div> 
            </div>
        )
    }
}