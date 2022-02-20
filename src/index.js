import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import App from "./Components/App";
import theme from "./theme/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,

  document.getElementById("root")
);

reportWebVitals();
