import React from "react";
import { Routes } from "pages";
import GlobalStyles from "helpers/GlobalStyles";
import { StoreProvider } from "@octaldev/react-store";

const App = () => (
    <>
        <GlobalStyles/>
        <StoreProvider>
            <Routes />
        </StoreProvider>
    </>
)

export default App;
