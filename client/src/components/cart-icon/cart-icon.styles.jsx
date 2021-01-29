//import styled from 'styled-components';
import styled, { css } from "styled-components";
import { ReactComponent as ShoppingIconSVG } from "../../assets/shopping-bag.svg";

export const CartContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 24px;
  height: 24px;
`;

const ItemCountContainer0 = css`
  color: red;
`;

const ItemCountContainer1 = css`
  color: green;
`;
const getCountStyles = ({ children }) => {
  return children.props.children > 0
    ? ItemCountContainer1
    : ItemCountContainer0;
};

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 13px;
  font-weight: bold;
  bottom: 11px;

  ${getCountStyles}
`;
