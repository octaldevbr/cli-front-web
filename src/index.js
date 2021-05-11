import React from "react";
import ReactDOM from "react-dom";
import { Store } from "@octaldev/react-store";
import App from "./App";

new Store({
    key: "test",
    whitelist: ["user"],
    reducers: {
        user: require("./reducers/user/reducer.js").default,
    }
})

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
document.getElementById("root"));
