import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
  EmptyCartDropdownButton,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch, toggleCartHidden }) => (
  <CartDropdownContainer>
    {cartItems.length ? (
      <CartItemsContainer>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </CartItemsContainer>
    ) : (
      <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
    )}
    {cartItems.length ? (
      <CartDropdownButton
        onClick={() => {
          history.push("/checkout");
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    ) : (
      <EmptyCartDropdownButton>GO TO CHECKOUT</EmptyCartDropdownButton>
    )}
  </CartDropdownContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
