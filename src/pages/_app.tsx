import { ApolloProvider } from "@apollo/react-hooks";
import { AppProps } from "next/app";
import React from "react";

import { createApolloClient } from "~/apollo/createClient";
import "~/styles/tailwind.css";
import "~/i18n";

export type Props = AppProps & { className?: string };
export const App: React.FC<Props> = ({ Component, pageProps }) => {
  const client = createApolloClient();
  return (
    <ApolloProvider client={client}>
      <div>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
};

export default App;
