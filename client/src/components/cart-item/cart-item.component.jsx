import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart, removeItem } from "../../redux/cart/cart.actions";
import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
  RemoveItemContainer,
} from "./cart-item.styles";

const CartItem = ({ cartItem, clearItem, removeItem, item }) => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
      <RemoveItemContainer onClick={() => clearItem(item)}>
        &#10060;
      </RemoveItemContainer>
    </CartItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
