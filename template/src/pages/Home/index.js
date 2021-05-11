import React from "react";
import FlatList from "@octaldev/react-flatlist";
import Utils from "@octaldev/utils";
import { showModal } from "@octaldev/react-modal";
import {
    Container,
    Subtitle,
    Button,
    Title,
    Text,
    List,
    Item,
    Card,
    Link
} from "./styles";

const libs = {
    "@octaldev/utils": "A collection of helper functions for JS Projects",
    "@octaldev/react-store": "The simplified store/redux constructor for all 8D applications",
    "@octaldev/react-modal": "A Super Light ReactJS Modal",
    "@octaldev/react-router": "Uma biblioteca leve e simples de roteamento para ReactJS e React Native",
    "@octaldev/react-flatlist": "A FlatList ReactJS Component For Large Lists",
}

const Home = () => {
    const onClick = () => showModal("example");
    const hash = Utils.SHA512("OctalDev");

    return (
        <Container>
            <Card>
                <Title>Front Web Boilerplate</Title>
                <Subtitle>Bibliotecas Utilizadas:</Subtitle>

                <FlatList
                    Component={ List }
                    data={ Object.keys(libs) }
                    keyExtractor={ item => item }
                    renderItem={({ item }) => (
                        <Item>
                            <Link link={ item }>{ item }</Link>: { libs[item] }
                        </Item>
                    )}
                />

                <Text>
                    E isso é o hash da palavra "OctalDev":
                    <span title={ hash }> { hash.slice(0, 40) }...</span>
                </Text>
            </Card>

            <Button onClick={ onClick }>Abrir Modal</Button>
        </Container>
    )
}

export default Home;
