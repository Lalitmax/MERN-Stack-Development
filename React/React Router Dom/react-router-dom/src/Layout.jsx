import React from "react"
import Container from "./Components/container"
import { Footer } from "./Components/footer"
import Header from "./Components/header"
import { MainContainer } from "./Components/mainContainer"
import { Outlet } from "react-router-dom"
 
export const Layout = () => {
    return (<>
        <Container>
            <Header></Header>
            <Outlet/>
            <Footer></Footer>
        </Container>

    </>)
}