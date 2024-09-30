import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import './index.module.scss'
import { store } from './redux/store.tsx';
export const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: "Bearer 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",
  }
});
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>

      <ApolloProvider client={client}>

        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
)


