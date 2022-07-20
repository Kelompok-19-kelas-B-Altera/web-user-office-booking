import { Provider } from "react-redux";
import "../styles/globals.css";
import store from "../redux/store";
import { ApolloProvider } from "@apollo/client";
import client from "../networks/graphql";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
