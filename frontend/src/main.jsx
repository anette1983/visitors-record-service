import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Global, ThemeProvider } from "@emotion/react";
import App from "./components/App";
import { GlobalStyles, theme } from "../src/styles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider
      toastOptions={{
        defaultOptions: {
          position: "top-right",
          duration: 2000,
          isClosable: true,
        },
      }}
    >
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <App />
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>
);
