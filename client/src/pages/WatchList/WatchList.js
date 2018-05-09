import React from "react";
import { Component } from "react";
import axios from "axios";
import "./WatchList.css";

class WatchList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies : []
        }
    }

    componentDidMount() {

    }
    
    render() {
        return (
            <div>
                <h1>Watch List</h1>
            </div>
        )
    }
}

export default WatchList;