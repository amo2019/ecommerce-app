import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import { clearCart } from "../../redux/cart/cart.actions";
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
  ClearTotalContainer,
  ToolTipContainer,
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, total, clearAllCart }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <ClearTotalContainer>
      {total ? (
        <ToolTipContainer>
          <span class="tooltiptext">DOUBLE CLICK TO CLEAR CART</span>
          <CustomButton
            style={{
              marginLeft: "5px",
              marginTop: "2px",
              backgroundColor: "tomato",
            }}
            onDoubleClick={clearAllCart}
          >
            Clear Cart
          </CustomButton>
        </ToolTipContainer>
      ) : (
        <CustomButton
          style={{
            marginLeft: "5px",
            backgroundColor: "tomato",
            cursor: "not-allowed",
          }}
          onClick={clearAllCart}
        >
          Clear Cart
        </CustomButton>
      )}
      {total ? <StripeCheckoutButton price={total} /> : null}

      <TotalContainer>TOTAL: ${total}</TotalContainer>
    </ClearTotalContainer>

    <WarningContainer>
      *Please use one of the following test credit cards*
      <br />
      4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
      <br />
      5555 5555 5555 4444 Mastercard Any 3 digits Any future date
      <br />
      4242 4242 4242 4242 Visa Any 3 digits Any future date
      <br />
      4000 0566 5566 5556 Visa (debit) Any 3 digits Any future date
    </WarningContainer>
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const mapDispatchToProps = (dispatch) => ({
  clearAllCart: () => dispatch(clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
