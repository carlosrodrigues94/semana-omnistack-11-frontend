import React, { useRef } from "react";

import history from "../../services/history";
import api from "../../services/api";

import { FiArrowLeft } from "react-icons/fi";

import {
  Container,
  RootContent,
  Content,
  Bottom,
  Button,
  Input,
  Title,
  Logo,
  Description,
  Text
} from "./styles";

export default function NewIncident() {
  const ong_id = localStorage.getItem("ong_id");
  const title = useRef("");
  const description = useRef("");
  const value = useRef(0);
  async function registerIncident() {
    try {
      const data = {
        title: title.current.value,
        description: description.current.value,
        value: Number(value.current.value)
      };

      await api.post(`/incidents`, data, {
        headers: {
          Authorization: ong_id
        }
      });

      history.push("/dashboard");
    } catch (err) {
      alert("Houve um erro ao cadastrar");
    }
  }
  return (
    <Container>
      <RootContent>
        <Content className="first_content">
          <Logo />
          <Title>Cadastrar novo caso</Title>
          <Text>
            <h3>
              Descreva o caso detalhadamente para encontrar um herói para
              resolver isso
            </h3>
          </Text>
          <Bottom onClick={() => history.push("/profile")}>
            <FiArrowLeft className="icon" />
            <h4>Voltar para a home</h4>
          </Bottom>
        </Content>
        <Content>
          <Input placeholder="Título do caso" ref={title} />
          <Description placeholder="Descrição">
            <textarea
              placeholder="Descrição"
              style={{
                border: 0,
                minWidth: "100%",
                minHeight: "100%",
                fontSize: "18px",
                resize: "none"
              }}
              ref={description}
            />
          </Description>
          <Input placeholder="Valor em Reais" ref={value} />

          <Button onClick={() => registerIncident()}>Cadastrar</Button>
        </Content>
      </RootContent>
    </Container>
  );
}
