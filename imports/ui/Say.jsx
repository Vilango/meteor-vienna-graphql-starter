import React from "react";
import { useQuery, gql } from "@apollo/client";

const SAY_QUERY = gql`
  {
    say
  }
`;

const Say = () => {
  const { loading, error, data } = useQuery(SAY_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log("Say data", data);

  return (
    <div>
      <h2>Server says:</h2>
      <div>{data.say}</div>
    </div>
  );
};

export default Say;
