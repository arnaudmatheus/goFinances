import React from "react";
import {
  Container,
  Header,
  HighlightCards,
  Title,
  Transaction,
  TransactionList,
} from "./styles";

import { UserContent } from "../../components/UserContent";
import { Cards } from "../../components/Cards";
import {
  TransactionCardDataProps,
  TransactionCard,
} from "../../components/TransactionCard";
import { getBottomSpace } from "react-native-iphone-x-helper";

export interface DataListProps extends TransactionCardDataProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      title: "Desenvolvimento",
      amount: "R$ 12000,00",
      category: { name: "vendas", icon: "shopping-cart" },
      date: "10/04/2020",
      type: "positive",
    },
    {
      id: "2",
      title: "Teste 3",
      amount: "R$ 12000,00",
      category: { name: "alimentação", icon: "shopping-cart" },
      date: "10/04/2020",
      type: "positive",
    },
    {
      id: "3",
      title: "Teste 4",
      amount: "R$ 12000,00",
      category: { name: "vendas", icon: "shopping-cart" },
      date: "10/04/2020",
      type: "negative",
    },
  ];

  return (
    <Container>
      <Header>
        <UserContent />
      </Header>
      <HighlightCards>
        <Cards
          title="Entrada"
          type="up"
          value="200"
          lastTransaction="Ultima entrada dia 10 de Abril"
        />
        <Cards
          title="Saida"
          type="down"
          value="200"
          lastTransaction="Ultima entrada dia 10 de Abril"
        />
        <Cards
          title="Total"
          type="total"
          value="200"
          lastTransaction="Ultima entrada dia 10 de Abril"
        />
      </HighlightCards>

      <Transaction>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transaction>
    </Container>
  );
}
