import React from "react";
import "./HeaderItem.css";

export default class HeaderItem extends React.Component {
    render() {
        return (
            <>
                <div class="Item-Container">
                    <div class="Icon-Wrapper">
                        <img class="Item-Image" src={this.props.image}/>
                    </div>
                    <div class="Content-Wrapper">
                        <div class="Title">{this.props.title}</div>
                        <div class="Description">{this.props.description}</div>
                    </div>
                </div>
            </>
        )
    }
}