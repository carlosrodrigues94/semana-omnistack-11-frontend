import React, { useEffect, useState } from "react";
import { FiPower, FiTrash2 } from "react-icons/fi";

import history from "../../services/history";
import api from "../../services/api";

import {
  Container,
  Header,
  ContentHeader,
  Logo,
  Name,
  Button,
  ButtonLogOut,
  Title,
  ContentCases,
  Case,
  DetailCase
} from "./styles";

export default function Dashboard() {
  const ong_id = localStorage.getItem("ong_id");
  const ong_name = localStorage.getItem("ong_name");
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    api
      .get("/incidents", { headers: { Authorization: ong_id } })
      .then(response => {
        setIncidents(response.data);
      });
  }, [ong_id]);

  async function handleDelete(inci_id) {
    try {
      await api.delete(`/incidents/${inci_id}`, {
        headers: {
          Authorization: ong_id
        }
      });
      setIncidents(incidents.filter(incident => incident.id !== inci_id));
      alert("Caso deletado com sucesso!");
    } catch (err) {
      return alert("Caso deletado com sucesso!");
    }
  }

  function handleLogout() {
    localStorage.removeItem("ong_id");
    localStorage.removeItem("ong_name");
    history.push("/");
  }
  return (
    <Container>
      <Header>
        <ContentHeader left={true}>
          <Logo />
          <Name>Bem Vinda, {ong_name}</Name>
        </ContentHeader>

        <ContentHeader>
          <Button onClick={() => history.push("/new_incident")}>
            Cadastrar novo caso
          </Button>
          <ButtonLogOut onClick={() => handleLogout()}>
            <FiPower />
          </ButtonLogOut>
        </ContentHeader>
      </Header>
      <Title>
        <h4>Casos cadastrados</h4>
      </Title>
      <ContentCases>
        {incidents &&
          incidents.length > 0 &&
          incidents.map(inci => (
            <Case key={inci.id}>
              <DetailCase bold={true}>
                <h4>Caso</h4>{" "}
                <FiTrash2
                  className="trash"
                  onClick={() => handleDelete(inci.id)}
                />
              </DetailCase>
              <DetailCase>{inci.title}</DetailCase>
              <DetailCase bold={true}>
                <h4>Descrição</h4>
              </DetailCase>
              <DetailCase>{inci.description}</DetailCase>
              <DetailCase bold={true}>
                <h4>Valor</h4>
              </DetailCase>
              <DetailCase>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                }).format(inci.value)}
              </DetailCase>
            </Case>
          ))}
      </ContentCases>
    </Container>
  );
}
