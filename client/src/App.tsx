import React from "react";
import Layout from "./components/shared/layout";
import { Provider } from "react-redux"
import store from './store/configureStore'


function App() {
  return (
    <Provider store={store}>
    <Layout></Layout>
    </Provider>
  );
}

export default App;
