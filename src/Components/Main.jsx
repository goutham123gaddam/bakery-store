import React from "react";
import {Link} from "react-router-dom";
import HeaderList from "./Header/List/HeaderList";
import BodyList from "./Body/List/BodyList";
import Strings from "./strings.json";
import './Main.css';

export default class Main extends React.Component {

    render() {
        return (
            <>
                <div class="Main-Content">
                    <div class="Header">
                        <div class="Navigator">
                            <Link to="/" class="Company">{Strings.Header.Company}</Link>
                            <Link to="checkout" class="Cart-Button">
                                <img src="./carticon.png" height="30px" width = "30px" />
                                {this.props.count > 0? (<div class="Count">{this.props.count}</div>):""}
                            </Link>
                        </div>
                        <HeaderList />
                    </div>
                    <div class="Body-Title"> {Strings.Body.Title} </div>
                    <div class="Body">
                        <BodyList addElementToCart={this.props.addElementToCart}/>
                    </div>
                </div>
            </>
        )
    }
}