import React, { Component } from 'react';
import {connect} from "react-redux";
import {filterProducts, sortProducts} from "../actions/pruductActions";

export default class Filter extends Component {
    render() {
        return (
            <div className = "filter">
            <div className = "filter-result">
                {this.props.count} Products

                {/* 商品价格排序     */}
                <div className = "filter-sort">    
                    Order{" "}
                    <select value = {this.props.size} onChange = {this.props.sortProducts}>
                        <option>Latest</option>
                        <option value = "lowest">Lowest</option>
                        <option value = "highest">highest</option>
                        </select>
                        </div>

                        {/*商品尺码筛选*/}
                <div className = "filter-size">Filter{" "}
                <select value = {this.props.size} onChange = {this.props.filterProducts}>
                    <option value = "">ALL</option>
                    <option value = "XS">XS</option>
                    <option value = "S">S</option>
                    <option value = "M">M</option>
                    <option value = "L">L</option>
                    <option value = "XL">XL</option>
                    <option value = "XXL">XXL</option>

                    </select></div>
                    </div>
                    
            </div>
        )
    }
}
