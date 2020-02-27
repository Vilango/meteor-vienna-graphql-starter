import React from "react";

import { useQuery, gql } from "@apollo/client";

const LINK_QUERY = gql`
  {
    links {
      _id
      title
      url
      createdAt
    }
  }
`;

const makeLink = (link)  => {
  return (
    <li key={link._id}>
      <a href={link.url} target="_blank">
        {link.title}
      </a>
    </li>
  );
}

const Links = () => {
  const { loading, error, data } = useQuery(LINK_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log("Links data", data);

  const links = data.links.map(link => makeLink(link));

  return (
    <div>
      <h2>Learn Meteor!</h2>
      <ul>{links}</ul>
    </div>
  );
};

export default InfoContainer = Links;
