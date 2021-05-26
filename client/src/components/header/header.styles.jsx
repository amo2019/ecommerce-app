import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
display: grid;
grid-template-columns: minmax(10px, 1fr) 4fr;
justify-content: space-evenly;
justify-items:right;
  font-weight: bold;
  font-size: 20px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 14px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 90%;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 30px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 8px 18px;
  cursor: pointer;
  color: darkgreen;
`;
