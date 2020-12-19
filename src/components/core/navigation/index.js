import React from "react";

import { gql, useQuery } from "@apollo/client";

const Navigation = () => {
  const { loading, error, data } = useQuery(gql`
    query {
      pages {
        id
        parent {
          id
          title {
            title
          }
        }
        cover {
          backgroundColor
          shapeImage {
            url
          }
        }
        containers {
          content
        }
      }
    }
  `);

  const canRender = !loading && !error;

  return <nav></nav>;
};

export default Navigation;
