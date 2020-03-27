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
  Line,
  Text
} from "./styles";

export default function Register() {
  const name = useRef("");
  const email = useRef("");
  const whats = useRef("");
  const city = useRef("");
  const uf = useRef("");

  async function handleRegister() {
    try {
      const data = {
        name: name.current.value,
        email: email.current.value,
        whatsapp: whats.current.value,
        city: city.current.value,
        uf: uf.current.value
      };

      if (
        !data.name ||
        !data.email ||
        !data.whatsapp ||
        !data.city ||
        !data.uf
      ) {
        return alert(
          "Erro: todos os campos são obrigatórios, preencha corretamente"
        );
      }

      const response = await api.post("/ongs", data);
      alert(`Ong Cadastrada com sucesso, seu id ${response.data.id}`);

      setTimeout(() => {
        history.push("/");
      }, 3000);
    } catch (err) {
      return alert("Houve um erro ao cadastrar", err);
    }
  }
  return (
    <Container>
      <RootContent>
        <Content className="first_content">
          <Logo />
          <Title>Cadastro</Title>
          <Text>
            <h3>
              Faça seu cadastro, entre na plataforma e ajude pessoas a
              encontrarem os casos da sua ONG
            </h3>
          </Text>
          <Bottom onClick={() => history.push("/")}>
            <FiArrowLeft className="icon" />
            <h4>Voltar para o logon</h4>
          </Bottom>
        </Content>
        <Content>
          <Input placeholder="Nome da ONG" ref={name} />
          <Input placeholder="E-mail" ref={email} />
          <Input placeholder="WhatsApp" ref={whats} />
          <Line>
            <Input placeholder="Cidade" className="city" ref={city} />
            <Input placeholder="UF" className="uf" ref={uf} />
          </Line>
          <Button onClick={() => handleRegister()}>Cadastrar</Button>
        </Content>
      </RootContent>
    </Container>
  );
}
