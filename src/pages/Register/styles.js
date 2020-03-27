import styled from "styled-components";

import logo from "../../assets/logo.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  transition: 0.5s;
  * {
    transition: 0.5s;
  }

  .first_content {
    align-items: flex-start;
    padding-left: 15%;
  }
`;

export const RootContent = styled.div`
  display: flex;
  width: 65%;
  height: 80%;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
`;

export const Logo = styled.img.attrs({ src: logo })`
  width: 50%;
  margin-bottom: 5%;
`;
export const Input = styled.input`
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 8px;
  height: 8%;
  width: 65%;
  padding-left: 2%;
  font-size: 18px;
  margin-top: 2%;

  &:focus {
    border: 2px solid #e02041;
  }
`;

export const Text = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  h3 {
    color: #666;
    font-size: 18px;
  }
`;
export const Button = styled.button`
  background: #e02041;
  font-size: 18px;
  border-radius: 8px;
  height: 8%;
  width: 65%;
  color: #fff;
  font-weight: bold;
  margin-top: 2%;

  &:hover {
    filter: brightness(90%);
  }
`;
export const Title = styled.h1`
  margin-top: 12%;
  margin-bottom: 5%;
  font-size: 50px;
`;
export const Bottom = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;
  height: 4%;
  margin-top: 2%;
  * {
    font-size: 20px;
  }
  h4 {
    margin-left: 2%;
  }
  .icon {
    color: #e02041;
    font-size: 20px;
    font-weight: bold;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8%;
  width: 65%;
  margin-top: 2%;

  input {
    margin: 0;
  }
  .city {
    height: 100%;
    width: 85%;
  }
  .uf {
    height: 100%;
    width: 13%;
    justify-content: center;
    padding: 3%;
  }
`;
