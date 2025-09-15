import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import RQProvider from "@components/common/RQProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <RQProvider>
      <App />
    </RQProvider>
  </BrowserRouter>
);
