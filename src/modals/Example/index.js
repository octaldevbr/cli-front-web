import React from "react";
import {
    Button,
    Title,
} from "./styles";

const Example = ({ closeModal }) => (
    <>
        <Title>Testando esse modal</Title>
        <Button onClick={ closeModal }>Fechar modal</Button>
    </>
)

export default Example;
