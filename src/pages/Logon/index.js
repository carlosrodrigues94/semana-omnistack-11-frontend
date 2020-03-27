import React, { useRef } from "react";
import history from "../../services/history";
import api from "../../services/api";

import { FiLogIn } from "react-icons/fi";

import {
  Container,
  Content,
  MainImg,
  Logo,
  Input,
  Button,
  Title,
  Bottom
} from "./styles";

export default function Logon() {
  const id = useRef("");

  async function handleLogin() {
    try {
      const user_id = id.current.value;
      const response = await api.post("/sessions", { id: user_id });
      localStorage.setItem("ong_name", response.data.name);
      localStorage.setItem("ong_id", user_id);
      history.push("/dashboard");
    } catch (err) {
      alert("Houve um erro ao tentar logar");
    }
  }
  return (
    <Container>
      <Content>
        <Logo />
        <Title>Faça seu logon</Title>
        <Input placeholder="Sua ID" ref={id} />
        <Button onClick={() => handleLogin()}>Entrar</Button>
        <Bottom onClick={() => history.push("/register")}>
          <FiLogIn className="icon" />
          <h4>Não tenho cadastro</h4>
        </Bottom>
      </Content>
      <Content>
        <MainImg />
      </Content>
    </Container>
  );
}
