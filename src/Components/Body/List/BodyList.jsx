import React from "react";
import BodyItem from "../Item/BodyItem";
import Strings from "../../strings.json";
import "./BodyList.css"

export default class BodyList extends React.Component{
    render() {
        var count = 0;
        return (
            <div class="Body-List">
                {   
                    Strings.Body.Items.map((object) => {
                        return (
                            <BodyItem 
                                id={count++}
                                image={object.image}
                                name={object.name}
                                cost={object.cost}
                                addElementToCart={this.props.addElementToCart}
                            />
                        )
                    })
                }
            </div>
        )
    }
}