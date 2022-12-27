import React from "react";
import HeaderItem from "../Item/HeaderItem";
import Strings from "../../strings.json";
import "./HeaderList.css";

import products from "../../../Icons/Header/products.png";
import cakeclass from "../../../Icons/Header/cakeclass.png";
import recipes from "../../../Icons/Header/recipes.png";

export default class HeaderList extends React.Component {
    render() {
        return (
            <div class="HeaderList">
                <HeaderItem image={products} title={Strings.Header.Title.Products} description={Strings.Header.Description.Products} />
                <HeaderItem image={cakeclass} title={Strings.Header.Title.CakeClass} description={Strings.Header.Description.CakeClass} />
                <HeaderItem image={recipes} title={Strings.Header.Title.Recipes} description={Strings.Header.Description.Recipes} />
            </div>
        )
    }
}