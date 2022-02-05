import React from "react";

import {
  Transaction,
  Title,
  Amount,
  Category,
  CategoryName,
  Icon,
  Date,
  Footer,
} from "./styles";

interface category {
  name: string;
  icon: string;
}
export interface TransactionCardDataProps {
  type: "positive" | "negative";
  title: string;
  amount: string;
  date: string;
  category: category;
}

export interface TransactionCardProps {
  data: TransactionCardDataProps;
}

export function TransactionCard({ data }: TransactionCardProps) {
  return (
    <Transaction>
      <Title>{data.title}</Title>

      <Amount type={data.type}>
        {data.type === "negative" && "- "}
        {data.amount}{" "}
      </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>

        <Date>{data.date}</Date>
      </Footer>
    </Transaction>
  );
}
