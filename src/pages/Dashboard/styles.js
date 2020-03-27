import styled from "styled-components";

import logo from "../../assets/logo.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;

  * {
    transition: 0.5s;
  }
`;

export const Header = styled.div`
  display: flex;
  height: 10%;
  width: 90%;
  margin-top: 0.5%;
  margin-bottom: 3%;
`;
export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.left ? "flex-start" : "flex-end")};
  height: 100%;
  width: 50%;
`;
export const Logo = styled.img.attrs({ src: logo })`
  width: 20%;
`;
export const Name = styled.h1`
  margin-left: 4%;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10%;
  width: 100%;
  height: 10%;

  h4 {
    font-size: 3em;
  }
`;
export const Button = styled.button`
  background: #e02041;
  font-size: 18px;
  border-radius: 8px;
  height: 65%;
  width: 35%;
  color: #fff;
  font-weight: bold;

  &:hover {
    filter: brightness(90%);
  }
`;
export const ButtonLogOut = styled.button`
  background: #fff;
  font-size: 30px;
  border-radius: 8px;
  height: 65%;
  width: 8%;
  color: #e02041;
  font-weight: bold;
  margin-left: 2%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

  &:hover {
    filter: brightness(90%);
  }
`;
export const ContentCases = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  height: 80%;
  margin-bottom: 1%;
  overflow-y: auto;
  padding: 2%;
`;
export const Case = styled.div`
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  align-items: flex-start;
  padding: 1%;
  width: 700px;
  height: 450px;
  background: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  margin: 1%;
`;
export const DetailCase = styled.div`
  display: flex;
  width: 100%;
  height: 18%;
  font-weight: ${props => props.bold && "bold"};
  justify-content: space-between;
  align-items: center;
  text-transform: ${props => props.bold && "uppercase"};
  color: ${props => (props.bold ? "#333" : "#666")};
  .trash {
    font-size: 30px;
    &:hover {
      cursor: pointer;
    }
  }
`;
