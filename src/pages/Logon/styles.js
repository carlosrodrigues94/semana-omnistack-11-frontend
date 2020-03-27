import styled from "styled-components";

import heroes from "../../assets/heroes.png";
import logo from "../../assets/logo.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  * {
    transition: 0.5s;
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
`;
export const MainImg = styled.img.attrs(props => ({ src: heroes }))`
  width: 40%;
`;
export const Logo = styled.img.attrs({ src: logo })`
  width: 25%;
`;
export const Input = styled.input`
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 5px;
  height: 8%;
  width: 50%;
  padding-left: 2%;
  font-size: 18px;

  &:focus {
    border: 2px solid #e02041;
  }
`;
export const Button = styled.button`
  background: #e02041;
  font-size: 18px;
  border-radius: 5px;
  height: 8%;
  width: 50%;
  color: #fff;
  font-weight: bold;
  margin-top: 2%;

  &:hover {
    filter: brightness(90%);
  }
`;
export const Title = styled.h1`
  margin-top: 10%;
  margin-bottom: 5%;
  font-size: 40px;
`;
export const Bottom = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;
  height: 4%;
  margin-top: 2%;
  * {
    font-size: 18px;
  }
  h4 {
    margin-left: 2%;
  }
  .icon {
    color: #e02041;
    font-size: 20px;
  }
  &:hover {
    cursor: pointer;
  }
`;
