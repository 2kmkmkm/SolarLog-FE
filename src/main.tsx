import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import RQProvider from "@components/common/RQProvider";
import { Provider } from "react-redux";
import { persistor, store } from "@app/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <RQProvider>
          <App />
        </RQProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
