import React, {Component} from "react";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";
import {connect} from "react-redux";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import {removeFromCart} from "../actions/cartActions";
import {createOrders, clearOrder} from "../actions/orderActions";

class Cart extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            address: "",
            showCheckout: false,
        };
    }
    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    createOrder = (e) => {
        e.preventDefault();
        const order = {
             name: this.state.name,
             email: this.state.email,
             address: this.state.address,
             cartItems: this.props.cartItems,
             total: this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0),
        };

        this.props.createOrder(order);

        };

        closeModal = () =>{
            this.props.clearOrder();

        };

        render(){
            const{cartItems, order} = this.props;
            return(
                <div>
                    {cartItems.length == 0?(
                        <div className = "cart cart-header">Cart is empty</div>
                    ):(
                        <div className = "cart cart-header">
                            You have {cartItems.length} in the cart{" "}

                </div>
            )}

            {order && (
                Modal isOpen = {true} onRequestClose = {this.closeModal};
                <Zoom>
                    <button className = "close-modal" onClick = {this.closeModal}>x
                    
                        </button>
                        <div className = "order-details">
                            <h3 className = "success-message">Your order has been placed.</h3>
                            <h2>Order {order._id}</h2>
                            <ul>
                                <li>
                                    <div>Name:</div>
                                    <div>{order.name}</div>
                                </li>
                                
                                <li>
                                    <div>Email:</div>
                                    <div>{order.email}</div>
                                </li>

                                <li>
                                    <div>Addrewss:</div>
                                    <div>{order.address}</div>
                                </li>

                                <li>
                                    <div>Date：</div>
                                    <div>{order.createdAt}</div>
                                </li>

                                <li>
                                    <div>Total:</div>
                                    <div>{formatCurrency(order.total)}</div>
                                </li>
                            </ul>
                        </div>
                </Zoom>
            )}