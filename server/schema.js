import { gql } from "apollo-server-express";

export const schema = gql`
  type Query {
    say: String
    links: [Link]
  }

  type Link {
    _id: String
    title: String
    url: String
    createdAt: String
  }
`;
