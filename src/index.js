import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material/styles";
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
