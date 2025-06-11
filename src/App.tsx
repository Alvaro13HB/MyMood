import React from "react";
import { ComponentHeader } from "./components";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes";

export default function App (){
    return (
        <>
            <NavigationContainer>
                <ComponentHeader />
                <Routes />
            </NavigationContainer>
        </>
    );
};