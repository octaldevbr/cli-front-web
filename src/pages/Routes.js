import React from "react";
import {
    RouterProvider,
    Redirect,
    Route,
}                        from "@octaldev/react-router";
import { ModalProvider } from "@octaldev/react-modal";
import { ThemeProvider } from "styled-components";
import * as Pages        from "pages";
import * as Modals       from "modals";
import theme             from "helpers/theme";

const Routes = () => {
    return (
        <ThemeProvider theme={ theme }>
            <ModalProvider>
                <Modals.Example name="example"/>
            </ModalProvider>

            <RouterProvider>
                <Route path="/" component={ Pages.Home } exact/>

                <Redirect from="*" to="/" />
            </RouterProvider>
        </ThemeProvider>
    )
}

export default Routes;
